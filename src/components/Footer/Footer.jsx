import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.covid_footer}>
      <div className={styles.footer_container}>
        <div className={styles.first_footer}>
          <p className={styles.footer_ckeanu}>
            by{" "}
            <a href="https://ckn-portfolio.netlify.app/" target="_blank">
              Ckeanu.
            </a>
          </p>
        </div>
        <div className={styles.second_footer}>
          <p>Data from Johns Hopkins University &copy;</p>
        </div>
      </div>
      <p className={styles.stay_safe_p}>Stay Home, Stay Safe</p>
    </footer>
  );
}

export default Footer;
