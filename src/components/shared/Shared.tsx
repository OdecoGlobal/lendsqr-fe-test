import Layout from '../layout/Layout';
import StatCard from '../stat/StatCard';
import Table from '../table/Table';
import styles from './shared.module.scss';

const Shared = () => {
  return (
    <Layout>
      <h2 className={styles.header}>Users</h2>
      <StatCard />
      <Table />
    </Layout>
  );
};

export default Shared;
