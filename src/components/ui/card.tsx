import styles from "@/styles/card.module.scss";

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div>{children}</div>
    </div>
  );
};
