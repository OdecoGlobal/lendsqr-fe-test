import { useState } from "react";
import styles from "./sidebar.module.scss";
import { menuItems } from "../../constants";
import dropdown from "../../assets/caret-down.png";
import { NavLink } from "react-router";
const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.sidebar} ${isMobileMenuOpen ? styles["sidebar-open"] : ""}`}
      >
        <button
          className={styles["mobile-toggle-close"]}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>
        <div className={styles["sidebar-content"]}>
          <nav className={styles["sidebar-nav"]}>
            {menuItems.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div key={index} className={styles["nav-item-dropdown"]}>
                    <div className={styles["nav-link"]}>
                      <img src={item.icon} alt="Icon" className={styles.icon} />
                      <span className={styles.label}> {item.label}</span>
                      <img
                        src={dropdown}
                        alt="dropdown icon"
                        className={styles["dropdown-icon"]}
                      />
                    </div>
                  </div>
                );
              }

              if (item.path) {
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }: { isActive: boolean }) =>
                      `${styles["nav-link"]} ${isActive ? styles.active : ""}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img src={item.icon} alt="icon" className={styles.icon} />
                    <span className={styles.label}>{item.label}</span>
                  </NavLink>
                );
              }

              if (item.section) {
                return (
                  <div key={index} className={styles["nav-section"]}>
                    <h3 className={styles["section-title"]}>{item.section}</h3>
                    {item.items.map((subitem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subitem.path}
                        className={({ isActive }: { isActive: boolean }) =>
                          `${styles["nav-link"]} ${isActive ? styles.active : ""}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <img
                          src={subitem.icon}
                          alt="icon"
                          className={styles.icon}
                        />
                        <span className={styles.label}>{subitem.label}</span>
                      </NavLink>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
