import React, { useState, useEffect } from 'react';
import styles from '../styles/AboutUs.module.css'; 
import logo from '../../public/mlsclogo.png';

const HeaderPortion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={styles.container}>
      {/* Nav Extension */}
      <div className={`${styles.extension} ${isOpen ? styles.leftToRight : ''}`} id="extension">
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ''}`} href="#">Home</a>
          {/* <div className={`${styles.line} ${isOpen ? styles.lineAnimation : ''}`}></div> */}
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ''}`} href="#">About</a>
          {/* <div className={`${styles.line} ${isOpen ? styles.lineAnimation : ''}`}></div> */}
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ''}`} href="#">Tracks</a>
          {/* <div className={`${styles.line} ${isOpen ? styles.lineAnimation : ''}`}></div> */}
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ''}`} href="#">Timeline</a>
          {/* <div className={`${styles.line} ${isOpen ? styles.lineAnimation : ''}`}></div> */}
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ''}`} href="#">Sponsors</a>
          {/* <div className={`${styles.line} ${isOpen ? styles.lineAnimation : ''}`}></div> */}
        </div>
      </div>

      {/* Left Side */}
      <div className={styles.leftSide}>
        <img src={logo} alt="MLSC Logo" />
      </div>

      {/* Header Section */}
      <div className={styles.header}>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, optio cupiditate laboriosam fuga suscipit laudantium,
          quibusdam nihil excepturi, impedit repellat? Eaque deleniti iure quia
          nostrum sunt. Aliquid aliquam voluptatibus accusantium amet? Nostrum
          perspiciatis placeat maxime odio possimus maiores quisquam non eius.
          Vitae voluptatum neque fugit, illum tempora itaque molestiae. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      {/* Right Side with Hamburger Menu */}
      <div className={styles.rightSide}>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleNav}
        >
          <div
            className={`${styles.line} ${isOpen ? styles.disappear : ''}`}
            id="firstLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.disappear : ''}`}
            id="secondLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltLeft : ''}`}
            id="thirdLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltRight : ''}`}
            id="fourLine"
          ></div>
          <div
            className={`${styles.line} ${isOpen ? styles.disappear : ''}`}
            id="fifthLine"
          ></div>
        </div>
      </div>
    </div>
  );
}

const AboutUs = () => {
  return (
    <>
    <div>

    <HeaderPortion />
    </div>
    </>
  )
};

export default AboutUs;
