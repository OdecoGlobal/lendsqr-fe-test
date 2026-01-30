import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import mascot from '../../assets/mascot-sign-in.svg';
import styles from './login.module.scss';
import { useNavigate } from 'react-router';
import { validateLogin } from '../../lib/validateLogin';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const newErrors = validateLogin(email, password);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <>
      <title>Lendsqr | Login</title>
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
              <h2>Welcome!</h2>
              <p>Enter details to login.</p>
            </div>

            <form className={styles.login_form} onSubmit={handleSubmit}>
              <div>
                <div className={styles.login_input}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div>
                <div className={styles.login_input}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </span>
                </div>
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}
              </div>

              <a href="#">Forgot Password?</a>

              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
