import styles from "@/styles/projects.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Featured Projects</h2>
        <p>Here are some of the products and tools I've contributed to:</p>
      </header>

      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <a href="https://kobotoolbox.org" className={styles.projectLink}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src="kobotoolbox_logo.png"
                alt="KoboToolbox"
                aria-description="logo for kobotoolbox"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>KoboToolbox</h3>
              <p>
                A comprehensive data collection platform for humanitarian
                organizations and researchers. I contributed to the frontend
                development, improving user experience and implementing new
                survey features.
              </p>
            </div>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a href="https://givewp.com" className={styles.projectLink}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src="givewp.png"
                alt="Give WP"
                aria-description="logo for give WP"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>GiveWP</h3>
              <p>
                The leading WordPress donation plugin trusted by thousands of
                nonprofits. I helped develop core donation features and payment
                gateway integrations to streamline online fundraising.
              </p>
            </div>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://paidmembershipspro.com"
            className={styles.projectLink}
          >
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src="pmpro.svg"
                alt="Paid Memberships Pro"
                aria-description="logo for paid memberships pro"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>Paid Memberships Pro</h3>
              <p>
                A powerful WordPress membership plugin for creating
                subscription-based websites. I contributed to membership
                management features and payment processing improvements.
              </p>
            </div>
          </a>
        </div>

        <div className={clsx(styles.projectCard, styles.projectLink)}>
          <div className={styles.projectInfo}>
            <h3>React PDB View</h3>
            <p>
              A React component for visualizing protein structures from PDB
              files. Built with modern React patterns and WebGL for
              high-performance 3D molecular rendering in the browser.
            </p>
            <div className={styles.source}>
              <Link href="https://lmntl.github.io/react-pdb-view/">
                ▶️ Demo
              </Link>
              <Link href="https://github.com/LMNTL/react-pdb-view">
                <img src="github-mark-white.svg" className={styles.octocat} />
                Source
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://github.com/LMNTL/word-cloud-for-reddit"
            className={styles.projectLink}
          >
            <div className={styles.projectInfo}>
              <h3>Word Cloud for Reddit</h3>
              <p>
                A data visualization tool that generates word clouds from Reddit
                posts and comments. Features real-time data fetching and
                customizable styling options for exploring trending topics.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
