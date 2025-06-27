import styles from "@/styles/card.module.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>
    <div>{children}</div>
  </div>
);
