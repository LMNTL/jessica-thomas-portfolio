import clsx from "clsx";
import styles from "@/styles/projectCard.module.scss";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  demo?: string;
  source?: string;
  href?: string;
  logo?: {
    src: string;
    alt: string;
    aria: string;
  };
}

const ProjectCard = ({
  title,
  description,
  demo,
  source,
  logo,
  href,
}: ProjectCardProps) => {
  if (href) {
    return (
      <div className={clsx(styles.projectCard)}>
        <a href={href} className={styles.projectLink}>
          <InnerCard
            title={title}
            description={description}
            logo={logo}
            source={source}
            demo={demo}
          />
        </a>
      </div>
    );
  }

  return (
    <div className={clsx(styles.projectCard, styles.projectLink)}>
      <InnerCard
        title={title}
        description={description}
        logo={logo}
        source={source}
        demo={demo}
      />
    </div>
  );
};

const InnerCard = ({
  title,
  description,
  demo,
  source,
  logo,
}: ProjectCardProps) => {
  return (
    <>
      {logo && (
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={logo.src}
            alt={logo.alt}
            aria-description={logo.aria}
          />
        </div>
      )}
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        {(demo || source) && (
          <div className={styles.source}>
            {demo && <Link href={demo}>▶️ Demo</Link>}
            {source && (
              <Link href={source}>
                <img src="github-mark-white.svg" className={styles.octocat} />
                Source
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
