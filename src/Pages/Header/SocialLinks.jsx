import React from "react";

const SocialLinks = () => (
  <ul className="tf-social-icon topbar-left">
    {[
      { href: "https://www.facebook.com/", icon: "icon-fb", label: "Facebook" },
      { href: "https://www.instagram.com/", icon: "icon-instagram", label: "Instagram" },
      { href: "https://x.com/", icon: "icon-x", label: "Twitter" },
      { href: "https://www.snapchat.com/", icon: "icon-snapchat", label: "Snapchat" }
    ].map(({ href, icon, label }) => (
      <li key={label}>
        <a href={href} className={`social-item social-${label.toLowerCase()}`} aria-label={label}>
          <i className={`icon ${icon}`} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;