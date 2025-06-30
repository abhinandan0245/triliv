import React, { useState } from 'react';

const Addresses = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "15 Yarran st (Default address)",
      firstName: "Vineta",
      lastName: "Pham",
      email: "account@vince.com",
      company: "Company",
      address1: "16 Yarran st",
      city: "Punchbowl",
      country: "Australia",
      postalCode: "2196",
      phone: "+61 1234 3435",
      isDefault: true
    },
    {
      id: 2,
      title: "17 Yarran st",
      firstName: "Vineta",
      lastName: "Pham",
      email: "account@vince.com",
      company: "Company",
      address1: "17 Yarran st",
      city: "Punchbowl",
      country: "Australia",
      postalCode: "2196",
      phone: "+61 1234 3435",
      isDefault: false
    }
  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    address1: '',
    city: '',
    region: '',
    province: '',
    zipCode: '',
    phone: '',
    isDefault: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddAddress = () => {
    setShowAddForm(true);
    setEditingAddress(null);
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      address1: '',
      city: '',
      region: '',
      province: '',
      zipCode: '',
      phone: '',
      isDefault: false
    });
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address.id);
    setShowAddForm(false);
    setFormData({
      firstName: address.firstName,
      lastName: address.lastName,
      company: address.company,
      address1: address.address1,
      city: address.city,
      region: '',
      province: '',
      zipCode: address.postalCode,
      phone: address.phone,
      isDefault: address.isDefault
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress ? { 
          ...addr, 
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          address1: formData.address1,
          city: formData.city,
          postalCode: formData.zipCode,
          phone: formData.phone,
          isDefault: formData.isDefault
        } : { ...addr, isDefault: formData.isDefault ? false : addr.isDefault }
      ));
    } else {
      // Add new address
      const newAddress = {
        id: addresses.length + 1,
        title: formData.address1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: '', // You might want to add email to your form
        company: formData.company,
        address1: formData.address1,
        city: formData.city,
        country: 'Australia', // Default country
        postalCode: formData.zipCode,
        phone: formData.phone,
        isDefault: formData.isDefault
      };
      setAddresses([
        ...addresses.map(addr => ({ ...addr, isDefault: formData.isDefault ? false : addr.isDefault })),
        newAddress
      ]);
    }
    setShowAddForm(false);
    setEditingAddress(null);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    if (editingAddress === id) {
      setEditingAddress(null);
    }
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingAddress(null);
  };

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Addresses</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Addresses</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}
      
      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">
          {/* sidebar-account */}
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>
          {/* /sidebar-account */}
          
          {/* Account */}
          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li>
                  <a href="myaccount" className="text-sm link fw-medium my-account-nav-item">Dashboard</a>
                </li>
                <li>
                  <a href="orders" className="text-sm link fw-medium my-account-nav-item">My Orders</a>
                </li>
                <li>
                  <a href="wish-list" className="text-sm link fw-medium my-account-nav-item">My Wishlist</a>
                </li>
                <li>
                  <a href="addresses" className="text-sm link fw-medium my-account-nav-item active">Addresses</a>
                </li>
                <li>
                  <a href="accountdetails" className="text-sm link fw-medium my-account-nav-item">Account Details</a>
                </li>
                <li>
                  <a href="/" className="text-sm link fw-medium my-account-nav-item ">Log Out</a>
                </li>
              </ul>
            </div>
            
            <div className="my-acount-content account-address">
              <h6 className="title-account">
                Your addresses ({addresses.length})
              </h6>
              
              <div className="widget-inner-address">
                <button className="tf-btn btn-add-address animate-btn" onClick={handleAddAddress}>
                  Add new address
                </button>
                
                {/* Add Address Form */}
                <form 
                  onSubmit={handleSubmit}
                  className={`wd-form-address form-default ${showAddForm ? 'show-form-address' : ''}`}
                >
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="first-name">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="last-name">Last Name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="address-1">Address 1</label>
                      <input 
                        type="text" 
                        id="address-1" 
                        name="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="city">City</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="region">Region</label>
                      <input 
                        type="text" 
                        id="region" 
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="provice">Province</label>
                      <input 
                        type="text" 
                        id="provice" 
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="zip-code">Postal/ZIP code</label>
                      <input 
                        type="text" 
                        id="zip-code" 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="phone">Phone</label>
                      <input 
                        type="text" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="tf-cart-checkbox">
                    <input 
                      type="checkbox" 
                      name="isDefault" 
                      className="tf-check" 
                      checked={formData.isDefault}
                      onChange={handleInputChange}
                      id="default-address-add" 
                    />
                    <label htmlFor="default-address-add" className="label">
                      <span>Set as default address</span>
                    </label>
                  </div>
                  <div className="box-btn">
                    <button className="tf-btn animate-btn" type="submit">
                      {editingAddress ? 'Update' : 'Add'}
                    </button>
                    <button 
                      type="button"
                      className="tf-btn btn-out-line-dark btn-hide-address"
                      onClick={cancelForm}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                
                {/* Address List */}
                <ul className="list-account-address tf-grid-layout md-col-2">
                  {addresses.map(address => (
                    <li key={address.id} className="account-address-item">
                      <p className="title text-md fw-medium">
                        {address.title}
                      </p>
                      <div className="info-detail">
                        <div className="box-infor">
                          <p className="text-md">{address.firstName} {address.lastName}</p>
                          <p className="text-md">{address.email}</p>
                          <p className="text-md">{address.company}</p>
                          <p className="text-md">{address.address1}</p>
                          <p className="text-md">{address.city}</p>
                          <p className="text-md">{address.country}</p>
                          <p className="text-md">{address.postalCode}</p>
                          <p className="text-md">{address.phone}</p>
                        </div>
                        <div className="box-btn">
                          <button 
                            className="tf-btn btn-out-line-dark btn-edit-address" 
                            onClick={() => handleEditAddress(address)}
                          >
                            Edit
                          </button>
                          <button 
                            className="tf-btn btn-out-line-dark btn-delete-address" 
                            onClick={() => handleDeleteAddress(address.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                {/* Edit Address Form */}
                <form 
                  onSubmit={handleSubmit}
                  className={`wd-form-address form-default edit-form-address ${editingAddress ? 'show-form-address' : ''}`}
                >
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-first-name">First Name</label>
                      <input 
                        type="text" 
                        id="edit-first-name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="edit-last-name">Last Name</label>
                      <input 
                        type="text" 
                        id="edit-last-name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-company">Company</label>
                      <input 
                        type="text" 
                        id="edit-company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-address-1">Address 1</label>
                      <input 
                        type="text" 
                        id="edit-address-1" 
                        name="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-city">City</label>
                      <input 
                        type="text" 
                        id="edit-city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-region">Region</label>
                      <input 
                        type="text" 
                        id="edit-region" 
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-provice">Province</label>
                      <input 
                        type="text" 
                        id="edit-provice" 
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-zip-code">Postal/ZIP code</label>
                      <input 
                        type="text" 
                        id="edit-zip-code" 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-phone">Phone</label>
                      <input 
                        type="text" 
                        id="edit-phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </fieldset>
                  </div>
                  <div className="tf-cart-checkbox">
                    <input 
                      type="checkbox" 
                      name="isDefault" 
                      className="tf-check" 
                      checked={formData.isDefault}
                      onChange={handleInputChange}
                      id="default-address-edit" 
                    />
                    <label htmlFor="default-address-edit" className="label">
                      <span>Set as default address</span>
                    </label>
                  </div>
                  <div className="box-btn">
                    <button className="tf-btn animate-btn" type="submit">
                      Update
                    </button>
                    <button 
                      type="button"
                      className="tf-btn btn-out-line-dark btn-hide-edit-address"
                      onClick={cancelForm}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Account */}
        </div>
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default Addresses;