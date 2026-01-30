import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import bellIcon from '../../assets/bell.png';
import dropdown from '../../assets/dropdown.png';

import styles from './navbar.module.scss';
import { useState } from 'react';
import LogoutButton from '../Logout';
const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileSearchOpen) setMobileSearchOpen(false);
  };
  return (
    <>
      <nav className={styles['nav-container']}>
        <div className={styles['logo-section']}>
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop search */}
        <div className={styles['search-input']}>
          <input type="text" placeholder="Search for anything" />

          <div className={styles['search-icon']}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>

        {/* Mobile search icon */}
        <div className={styles['mobile-controls']}>
          <div
            className={styles['mobile-search-toggle']}
            onClick={toggleMobileSearch}
          >
            <img src={searchIcon} alt="Search Icon" />
          </div>

          <div
            className={`${styles['mobile-menu-toggle']} ${
              mobileMenuOpen ? styles.active : ''
            }`}
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Desktop nav actions */}

        <div className={styles['nav-actions']}>
          <a href="#">Docs</a>
          <img
            src={bellIcon}
            alt="Notification Icon"
            className={styles['bell-icon']}
          />

          <div className={styles['profile-section']}>
            <div className={styles['profile-image']}>
              <img src="https://github.com/shadcn.png" alt="Profile picture" />
            </div>
            <p>Adedeji</p>
            <img src={dropdown} alt="Dropdown icon" />
          </div>
          <LogoutButton />
        </div>
      </nav>

      {/* Mobile search */}
      <div
        className={`${styles['mobile-search-overlay']} ${
          mobileSearchOpen ? styles.active : ''
        }`}
      >
        <div className={styles['search-input']}>
          <input type="text" placeholder="Search for anything" autoFocus />
          <div className={styles['search-icon']} onClick={toggleMobileSearch}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles['mobile-menu-overlay']} ${
          mobileMenuOpen ? styles.active : ''
        }`}
      >
        <div className={styles['mobile-nav-content']}>
          <a href="#" onClick={toggleMobileMenu}>
            Docs
          </a>

          <div className={styles['mobile-bell']}>
            <span>Notifications</span>
            <img src={bellIcon} alt="Notification Icon" />
          </div>
          <div className={styles['mobile-profile']}>
            <div className={styles['profile-image']}>
              <img src="https://github.com/shadcn.png" alt="Profile picture" />
            </div>
            <div className={styles['profile-info']}>
              <p>Adedeji</p>
            </div>
            <img src={dropdown} alt="Dropdown icon" className="dropdown-icon" />
          </div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
