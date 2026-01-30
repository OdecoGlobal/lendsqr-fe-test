import { useState, type ChangeEvent } from 'react';
import styles from './filter.module.scss';
import { status } from '../../constants';
import type { FilterData } from '../../types';
import Card from '../card/Card';
import Button from '../button/Button';

interface FilterProps {
  onClose: () => void;
  onFilter: (filters: FilterData) => void;
  organizations: string[];
}

const initialData: FilterData = {
  organization: '',
  username: '',
  email: '',
  date: '',
  phoneNumber: '',
  status: '',
};

const TableFilter = ({ onClose, onFilter, organizations }: FilterProps) => {
  const [filters, setFilters] = useState<FilterData>(initialData);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters(initialData);
    setTimeout(() => onClose(), 500);
  };
  const handleFilter = () => {
    setTimeout(() => onClose(), 500);
    onFilter(filters);
  };

  return (
    <Card className={styles['filter-card']}>
      <div
        className={styles['filter-popup']}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles['filter-overlay']} onClick={onClose} />

        <header>
          <h3>Filter</h3>
        </header>

        <main className={styles['filter-body']}>
          <div className={styles['form-group']}>
            <label htmlFor="organization">Organizations</label>
            <select
              name="organization"
              id="organization"
              value={filters.organization}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              {organizations.map(organization => (
                <option value={organization} key={organization}>
                  {organization}
                </option>
              ))}
            </select>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User"
              value={filters.username}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={filters.email}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              value={filters.date}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="PhoneNumber"
              value={filters.phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={filters.status}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              {status.map(stat => (
                <option value={stat.key} key={stat.key}>
                  {stat.value}
                </option>
              ))}
            </select>
          </div>
        </main>

        <div className={styles['filter-actions']}>
          <Button
            className={styles['reset-btn']}
            type="button"
            onClick={handleReset}
            variant="secondary"
          >
            Reset
          </Button>
          <Button
            className={styles['filter-btn']}
            type="button"
            onClick={handleFilter}
          >
            Filter
          </Button>
        </div>
        {/* </div> */}
      </div>
    </Card>
  );
};

export default TableFilter;
