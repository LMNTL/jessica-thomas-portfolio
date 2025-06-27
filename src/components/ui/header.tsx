import styles from "@/styles/header.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <nav id={styles.nav}>
        <ul>
          <li>
            <Link href={"/"} data-text="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href={"projects"} data-text="Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href={"about"} data-text="About Me">
              About Me
            </Link>
          </li>
          <li>
            <Link href={"skills"} data-text="Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link href={"contact"} data-text="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
