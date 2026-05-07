import React, { useState } from 'react';
import '../App.css'; // Pakai titik dua (..) karena filenya ada di luar folder components

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ... sisa kode lainnya sama

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">RYZALL.CO</div>

        {/* Tambahkan class 'active' jika isOpen bernilai true */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#testi" onClick={() => setIsOpen(false)}>Testi</a></li>
          <li><button className="btn-contact-mobile"></button></li>
        </ul>

        <div className="nav-right">
           <button className="btn-contact">Contact Us</button>
           
           {/* Tombol Hamburger */}
           <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
             <span></span>
             <span></span>
             <span></span>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;