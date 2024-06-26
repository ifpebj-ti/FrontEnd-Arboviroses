import React from 'react';
import { FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.phrase}>Nos acompanhe!</p>
      <hr className={styles.separator} />
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <a>(81) 99350-3948</a>
        </div>
        <div className={styles.contactItem}>
          <FaInstagram className={styles.icon} />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.contactItem}>
          <FaYoutube className={styles.icon} />
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
