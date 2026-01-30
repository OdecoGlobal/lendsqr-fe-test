import { useEffect, useState } from 'react';
import type { FilterData, User } from '../../types';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import TableActionMenu from './TableActionMenu';
import TableFilter from './TableFilter';
import EmptyComponent from '../empty/Empty';
import Loading from '../loading/Loading';

import filter from '../../assets/filter.svg';
import verticalDot from '../../assets/vert-dot.svg';
import { formatDateTime } from '../../lib/formatDate';

import styles from './table.module.scss';
import { fetchUsers } from '../../lib/api';

const Table = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUsers();

        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleFilter = (filters: FilterData) => {
    const filtered = users.filter(user => {
      if (
        filters.organization &&
        user.organization.toLowerCase() !== filters.organization.toLowerCase()
      ) {
        return false;
      }

      if (
        filters.username &&
        !user.user_name.toLowerCase().includes(filters.username.toLowerCase())
      ) {
        return false;
      }

      if (
        filters.email &&
        !user.email.toLowerCase().includes(filters.email.toLowerCase())
      ) {
        return false;
      }

      if (
        filters.date &&
        !formatDateTime(new Date(user.date_joined)).dateTime.includes(
          filters.date,
        )
      ) {
        return false;
      }

      if (
        filters.status &&
        user.status.toLowerCase() !== filters.status.toLowerCase()
      ) {
        return false;
      }
      return true;
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleClearFilters = () => {
    setFilteredUsers(users);
    setCurrentPage(1);
  };

  const handleItemsPerPageChage = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const getStatusClass = (status: string) => {
    return styles[`status-${status.toLowerCase()}`];
  };

  const toggleMenu = (id: string) => {
    setShowMenu(showMenu === id ? null : id);
  };
  const organizations = users && [
    ...new Set(users.map(user => user.organization)),
  ];

  return (
    <Card padding="none">
      {showFilter && (
        <TableFilter
          onClose={handleCloseFilter}
          onFilter={handleFilter}
          organizations={organizations}
        />
      )}
      <div className={styles['table-wrapper']}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <span>ORGANIZATION</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>USERNAME</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>EMAIL</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>PHONE NUMBER</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>DATE JOINED</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th>
                <span>STATUS</span>
                <button
                  className={styles['filter-btn']}
                  onClick={handleFilterClick}
                >
                  <img src={filter} alt="Filter icon" />
                </button>
              </th>
              <th />
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} style={{ padding: 0, border: 'none' }}>
                  <Loading />
                </td>
              </tr>
            ) : currentItems.length > 0 ? (
              currentItems.map(user => (
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
                    <div className={styles['action-menu']}>
                      <button
                        className={styles['action-btn']}
                        onClick={() => toggleMenu(String(user.id))}
                        aria-label="Actions"
                      >
                        <img src={verticalDot} alt="Action button" />
                      </button>

                      {showMenu === String(user.id) && (
                        <TableActionMenu userId={user.id} />
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} style={{ padding: 0, border: 'none' }}>
                  <EmptyComponent
                    actionLabel="Clear Filters"
                    onAction={handleClearFilters}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredUsers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemPerPageChange={handleItemsPerPageChage}
      />
    </Card>
  );
};

export default Table;
