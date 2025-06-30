import styles from "@/styles/page.module.scss";
import Head from "next/head"; // Added for metadata

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="A portfolio for a pretty dang good software engineer."
        />
      </Head>
      <div className={styles.page}>
        <h2 className={styles.heroText}>Jessica Santoro Thomas.</h2>
        <h2 className={styles.heroText}>Full stack developer.</h2>
        <h2 className={styles.heroText}>I ship code.</h2>
      </div>
    </>
  );
}
