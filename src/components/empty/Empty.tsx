import Button from '../button/Button';
import styles from './empty.module.scss';
const EmptyComponent = ({ onAction }: { onAction: () => void }) => {
  return (
    <div className={styles['empty-state']}>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
        </svg>
      </div>
      <h3 className={styles.title}>No results found</h3>
      <p className={styles.message}>
        We couldn't find any results matching your filters. Try adjusting your
        search criteria.
      </p>

      <Button onClick={onAction}>Clear Filter</Button>
    </div>
  );
};

export default EmptyComponent;
