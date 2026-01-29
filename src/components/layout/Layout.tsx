import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <Navbar />
      <main className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </section>
  );
};

export default Layout;
