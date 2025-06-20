import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector('.preload-container');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }, 1000);
    }
  }, []);

  return (
    <div className="preload preload-container">
      <div className="preload-logo">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;