import { Link } from 'react-router';
import styles from './not-found.module.scss';
import Button from '../button/Button';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.message}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Button>
            <Link to="/" className={styles['primary-btn']}>
              Go to Home
            </Link>
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="secondary"
            // className={styles['secondary-btn']}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
