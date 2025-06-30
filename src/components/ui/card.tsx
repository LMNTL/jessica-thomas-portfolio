import styles from "@/styles/card.module.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  innerClass?: string;
}

export const Card = ({ children, title, innerClass }: CardProps) => (
  <div className={styles.card}>
    {title && <h2>{title}</h2>}
    <div className={innerClass}>{children}</div>
  </div>
);
