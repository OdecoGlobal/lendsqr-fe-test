import userPink from '../../assets/user-pink.svg';
import userPurple from '../../assets/user-purple.svg';
import coin from '../../assets/coin-red.svg';
import file from '../../assets/file-orange.svg';

import styles from './stat.module.scss';
import Card from '../card/Card';

const stats = [
  {
    icon: userPink,
    iconBg: 'rgba(223, 24, 255, 0.1)',
    title: 'Users',
    value: 2453,
  },
  {
    icon: userPurple,
    iconBg: 'rgba(87, 24, 255, 0.1)',
    title: 'Active Users',
    value: 2344,
  },
  {
    icon: file,
    iconBg: 'rgba(245, 95, 68, 0.1)',
    title: 'Users with Loans',
    value: 1234,
  },
  {
    icon: coin,
    iconBg: 'rgba(255, 51, 102, 0.1)',
    title: 'Users with Savings',
    value: 1234,
  },
];
const StatCard = () => {
  return (
    <div className={styles['stat-container']}>
      {stats.map(stat => (
        <Card key={stat.title} padding="medium">
          <div className={styles['stat-card']}>
            <div
              className={styles['icon-wrapper']}
              style={{ backgroundColor: stat.iconBg }}
            >
              <img src={stat.icon} alt={stat.title} />
            </div>
            <h3 className={styles.title}>{stat.title}</h3>
            <p>{stat.value.toLocaleString()}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatCard;
