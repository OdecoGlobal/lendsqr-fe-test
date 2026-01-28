import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="wrapper">
      <Navbar />
      <main className={styles.content}>
        <Sidebar />
        {children}
      </main>
    </section>
  );
};

export default Layout;
