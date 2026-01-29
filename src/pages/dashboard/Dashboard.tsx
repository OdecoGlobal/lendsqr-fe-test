import Layout from '../../components/layout/Layout';
import Table from '../../components/table/Table';
import StatCard from '../../components/stat/StatCard';

const Dashboard = () => {
  return (
    <>
      <Layout>
        <StatCard />
        <Table />
      </Layout>
    </>
  );
};

export default Dashboard;
