
import styles from './FooterStyles.module.css';
import React from 'react';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Ruben Roque. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
