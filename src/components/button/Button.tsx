import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button-${variant}`]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
