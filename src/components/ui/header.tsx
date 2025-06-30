import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav id={styles.nav}>
        <ul>
          <li className={clsx({ [styles.active]: router.pathname === "/" })}>
            <Link href={"/"} data-text="Home">
              Home
            </Link>
          </li>
          <li
            className={clsx({
              [styles.active]: router.pathname === "/projects",
            })}
          >
            <Link href={"projects"} data-text="Projects">
              Projects
            </Link>
          </li>
          <li
            className={clsx({
              [styles.active]: router.pathname === "/about",
            })}
          >
            <Link href={"about"} data-text="About Me">
              About Me
            </Link>
          </li>
          <li
            className={clsx({
              [styles.active]: router.pathname === "/skills",
            })}
          >
            <Link href={"skills"} data-text="Skills">
              Skills
            </Link>
          </li>
          <li
            className={clsx({
              [styles.active]: router.pathname === "/contact",
            })}
          >
            <Link href={"contact"} data-text="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
