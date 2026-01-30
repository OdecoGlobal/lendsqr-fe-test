import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { User } from '../../types';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import EmptyComponent from '../../components/empty/Empty';
import Button from '../../components/button/Button';
import Layout from '../../components/layout/Layout';
import Card from '../../components/card/Card';

import styles from './user-details.module.scss';

import arrowBack from '../../assets/arrow-back.svg';
import userBig from '../../assets/user-big.svg';
import StarTier from '../../components/stars/Stars';
import { formatCurrency } from '../../lib/formatCurrency';
import UserDetailsComponent from './UserDetailsComponent';

const UsersDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>();
  const [activeTab, setActiveTab] = useState('general');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('/data/lendsqr.json');
        const foundUser = res.data.find((user: User) => String(user.id) === id);
        setUser(foundUser || null);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/dashboard');
    }
  };

  if (isLoading) {
    return <Loading fullScreen={true} />;
  }

  if (!user) {
    return (
      <EmptyComponent
        title="No User Found"
        description="There was no user found with this ID. Please try again later"
        actionLabel="Go Back"
        onAction={handleBack}
      />
    );
  }

  return (
    <Layout>
      <div className={styles['user-details']}>
        <button
          className={styles['back-btn']}
          onClick={handleBack}
          aria-label="back button"
        >
          <img src={arrowBack} alt="Arrow back" />
          Back To Users
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>User Details</h1>
          <div className={styles.actions}>
            <Button variant="danger" className={styles['action-btn']}>
              BLACKLIST USER
            </Button>

            <Button variant="success" className={styles['action-btn']}>
              ACTIVATE USER
            </Button>
          </div>
        </header>

        {/* Info card */}
        <Card padding="large">
          <section className={styles['user-info']}>
            <div className={styles['info-left']}>
              <div className={styles.avatar}>
                <img src={userBig} alt="user icon" />
              </div>

              <div className={styles['user-basic']}>
                <h2 className={styles.name}>{user.full_name}</h2>
                <p className={styles['user-id']}>{user.user_id.slice(0, 11)}</p>
              </div>
            </div>

            <div className={styles['info-middle']}>
              <div className={styles['tier-info']}>
                <p className={styles.label}>User's Tier</p>
                <div className={styles.stars}>
                  <StarTier tier={user.user_tier} />
                </div>
              </div>
            </div>

            <div className={styles['info-right']}>
              <div className={styles['bank-info']}>
                <h3 className={styles.amount}>
                  {formatCurrency(user.account_balance)}
                </h3>
                <p className={styles['bank-account']}>
                  {user.account_number}/{user.bank}
                </p>
              </div>
            </div>
          </section>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'general' ? styles.active : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General Details
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'documents' ? styles.active : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'bank' ? styles.active : ''}`}
              onClick={() => setActiveTab('bank')}
            >
              Bank Details
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'loans' ? styles.active : ''}`}
              onClick={() => setActiveTab('loans')}
            >
              Loans
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'savings' ? styles.active : ''}`}
              onClick={() => setActiveTab('savings')}
            >
              Savings
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'app' ? styles.active : ''}`}
              onClick={() => setActiveTab('app')}
            >
              App and System
            </button>
          </div>
        </Card>
        <UserDetailsComponent user={user} />
      </div>
    </Layout>
  );
};

export default UsersDetails;
