import Navbar from "../navbar/Navbar";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="wrapper">
      <Navbar />
      <main className={styles.content}>
        {children}
        hello
      </main>
    </section>
  );
};

export default Layout;
