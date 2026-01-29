import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import filter from "../../assets/filter.png";
import verticalDot from "../../assets/vert-dot.png";
import styles from "./table.module.scss";
import type { FilterData, User } from "../../types";
import TableActionMenu from "./TableActionMenu";
import TableFilter from "./TableFilter";
import { formatDateTime } from "../../lib/formatDate";

const Table = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data/lendsqr.json");
        // console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleFilter = (filters: FilterData) => {
    console.log("Applying filters", filters);
  };

  const getStatusClass = (status: string) => {
    return styles[`status-${status.toLowerCase()}`];
  };

  const toggleMenu = (id: string) => {
    setShowMenu(showMenu === id ? null : id);
  };
  const organizations = users && [
    ...new Set(users.map((user) => user.organization)),
  ];

  return (
    <Card>
      {showFilter && (
        <TableFilter
          onClose={handleCloseFilter}
          onFilter={handleFilter}
          organizations={organizations}
        />
      )}
      <div className={styles["table-wrapper"]}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <span>ORGANIZATION</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>USERNAME</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>EMAIL</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>PHONE NUMBER</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>DATE JOINED</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>STATUS</span>
                <button
                  className={styles["filter-btn"]}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th />
            </tr>
          </thead>

          <tbody>
            {users.slice(0, 10).map((user) => (
              <tr key={user.id}>
                <td data-label="Organization">{user.organization}</td>
                <td data-label="Username">{user.user_name}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Phone Number">{user.phone_number}</td>
                <td data-label="Date Joined">
                  {formatDateTime(new Date(user.date_joined)).dateTime}
                </td>
                <td data-label="Status">
                  <span
                    className={`${styles.status} ${getStatusClass(user.status)}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td>
                  <div className={styles["action-menu"]}>
                    <button
                      className={styles["action-btn"]}
                      onClick={() => toggleMenu(String(user.id))}
                      aria-label="Actions"
                    >
                      <img src={verticalDot} alt="Action button" />
                    </button>

                    {showMenu === String(user.id) && <TableActionMenu />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
