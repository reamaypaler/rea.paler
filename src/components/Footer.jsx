import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#8b0000', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2024 Chocolat Privé | All rights reserved</p>
      <div>
        <a href="#" style={{ color: '#f5c32c', textDecoration: 'none', marginLeft: '15px' }}>Terms & Conditions</a>
        <a href="#" style={{ color: '#f5c32c', textDecoration: 'none', marginLeft: '15px' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#f5c32c', textDecoration: 'none', marginLeft: '15px' }}>FAQ</a>
      </div>
    </footer>
  );
};

export default Footer;
