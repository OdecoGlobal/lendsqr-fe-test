import type { ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "small" | "medium" | "large";
}
const Card = ({ children, className = "", padding = "medium" }: CardProps) => {
  return (
    <div
      className={`${styles.card} ${styles[`padding-${padding}`]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
