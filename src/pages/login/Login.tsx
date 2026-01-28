import logo from "../../assets/logo.svg";
import mascot from "../../assets/mascot-sign-in.svg";
import styles from "./login.module.scss";
const Login = () => {
  return (
    <section className={styles.login_container}>
      <div className={styles.logo_section}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.content}>
        <div className={styles.mascot}>
          <img src={mascot} alt="mascot" />
        </div>

        <div className={styles.form_container}>
          <div className={styles.form_header}>
            <h2>Welcome</h2>
            <p>Enter details to login</p>
          </div>

          <form className={styles.login_form}>
            <div className={styles.login_input}>
              <input type="email" placeholder="Email" />
            </div>

            <div className={styles.login_input}>
              <input type="password" placeholder="Password" />
              <span>SHOW</span>
            </div>
            <a href="#">Forgot Password?</a>

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
