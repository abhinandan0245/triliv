// src/utils/guestCart.js
const GUEST_CART_KEY = "guest_cart";

const norm = (v) =>
  v === undefined || v === null ? "" : String(v).toLowerCase().trim();

export const getGuestCart = () => {
  try {
    return JSON.parse(localStorage.getItem(GUEST_CART_KEY)) || [];
  } catch {
    return [];
  }
};

export const saveGuestCart = (cart) => {
  localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cart));
};

// helper to safely read image url from a variant object
const readImageUrl = (obj) => {
  if (!obj) return undefined;
  if (typeof obj === "string") return obj;
  return obj.url ?? obj.src ?? obj.image ?? obj.path ?? obj.filename ?? undefined;
};

export const addToGuestCart = (product) => {
  // Accept product objects that might have different id keys
  const cart = getGuestCart();
  const productId = product.productId ?? product._id ?? product.id ?? "";
  const size = product.size ?? null;

  // find existing entry (normalize sizes)
  const existingIndex = cart.findIndex(
    (it) =>
      String(it.productId) === String(productId) &&
      norm(it.size) === norm(size)
  );

  // price selection (try variants first, then fallbacks)
  let selectedPrice = 0;
  let selectedOriginalPrice = 0;
  if (Array.isArray(product.priceVariants) && size) {
    const pv = product.priceVariants.find((p) => norm(p.size) === norm(size));
    if (pv) {
      selectedPrice = Number(pv.price ?? pv.discountedPrice ?? 0);
      selectedOriginalPrice = Number(pv.originalPrice ?? pv.price ?? 0);
    }
  }
  if (!selectedPrice && (product.price || product.variantPrice)) {
    selectedPrice = Number(product.price ?? product.variantPrice ?? 0);
  }
  if (!selectedOriginalPrice && product.originalPrice) {
    selectedOriginalPrice = Number(product.originalPrice);
  }
  if (!selectedOriginalPrice) selectedOriginalPrice = selectedPrice;

  // image selection: check imageVariants, images array, then single image fields
  let selectedImage;
  if (Array.isArray(product.imageVariants) && size) {
    const iv = product.imageVariants.find((img) => norm(img.size) === norm(size));
    selectedImage = readImageUrl(iv);
  }

  if (!selectedImage && Array.isArray(product.images) && product.images.length) {
    // images may be array of strings or objects
    const first = product.images[0];
    selectedImage = readImageUrl(first);
  }

  // fallback single-image fields
  if (!selectedImage) {
    selectedImage = product.image ?? product.img ?? product.thumbnail ?? undefined;
    if (typeof selectedImage !== "string") selectedImage = readImageUrl(selectedImage);
  }

  if (!selectedImage) selectedImage = "/default-thumb.jpg";

  // Build the cart item
  if (existingIndex !== -1) {
    // merge quantity and refresh price/image if available
    const existing = cart[existingIndex];
    existing.quantity = Number(existing.quantity || 0) + Number(product.quantity || 1);
    if (selectedPrice) existing.price = selectedPrice;
    if (selectedOriginalPrice) existing.originalPrice = selectedOriginalPrice;
    if (selectedImage) existing.image = selectedImage;
  } else {
    cart.push({
      productId,
      title: product.title ?? product.name ?? product.productName ?? "",
      size: size || null,
      quantity: Number(product.quantity || 1),
      price: Number(selectedPrice || 0),
      originalPrice: Number(selectedOriginalPrice || selectedPrice || 0),
      image: selectedImage,
      // optionally keep a snapshot
      _raw: product,
    });
  }

  saveGuestCart(cart);
};

export const updateGuestCartQuantity = (productId, size, newQuantity) => {
  const cart = getGuestCart();
  const idx = cart.findIndex(
    (i) => String(i.productId) === String(productId) && norm(i.size) === norm(size)
  );

  if (idx === -1) return;

  if (newQuantity <= 0) {
    cart.splice(idx, 1);
  } else {
    cart[idx].quantity = Number(newQuantity);
  }

  saveGuestCart(cart);
};

export const removeFromGuestCart = (productId, size) => {
  const cart = getGuestCart();
  const filtered = cart.filter(
    (i) => !(String(i.productId) === String(productId) && norm(i.size) === norm(size))
  );
  saveGuestCart(filtered);
};

export const clearGuestCart = () => {
  localStorage.removeItem(GUEST_CART_KEY);
};
