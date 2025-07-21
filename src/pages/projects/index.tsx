import styles from "@/styles/projects.module.scss";
import ProjectCard from "@/components/ui/projectCard";

export default function Projects() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Featured Projects</h2>
        <p>Here are some of the products and tools I've contributed to:</p>
      </header>

      <div className={styles.projectsGrid}>
        <ProjectCard
          title="KoboToolbox"
          description={`A comprehensive data collection platform for humanitarian
                organizations and researchers. I led the frontend
                development, improving user experience and implementing new
                survey features. I also architected and built out the front and back ends
                of a subscription feature that's been instrumental in platform growth.`}
          href="https://kobotoolbox.org"
          logo={{
            src: "kobotoolbox_logo.png",
            alt: "KoboToolbox",
            aria: "logo for kobotoolbox",
          }}
        />

        <ProjectCard
          title="GiveWP"
          description={`The leading WordPress donation plugin trusted by thousands of
                nonprofits. I helped develop core donation features and payment
                gateway integrations to streamline online fundraising.`}
          href="https://givewp.com"
          logo={{
            src: "givewp.png",
            alt: "Give WP",
            aria: "logo for give WP",
          }}
        />

        <ProjectCard
          title="Paid Memberships Pro"
          description={`A powerful WordPress membership plugin for creating
                subscription-based websites. I contributed to membership
                management features and payment processing improvements.`}
          href="https://paidmembershipspro.com"
          logo={{
            src: "pmpro.svg",
            alt: "Paid Memberships Pro",
            aria: "logo for paid memberships pro",
          }}
        />

        <ProjectCard
          title="Emoji Match"
          description="A match-3 web game using React + TypeScript + Vite. An experiment with the web audio API and AI-assisted coding."
          demo="https://lmntl.github.io/emoji-match-3/"
          source="https://github.com/lmntl/emoji-match-3/"
        />

        <ProjectCard
          title="React PDB View"
          description={`A React component for visualizing protein structures from PDB
              files. Built with modern React patterns and WebGL for
              high-performance 3D molecular rendering in the browser.`}
          demo="https://lmntl.github.io/react-pdb-view/"
          source="https://github.com/lmntl/react-pdb-view"
        />

        <ProjectCard
          title="Word Cloud for Reddit"
          description={`A data visualization tool that generates word clouds from Reddit
                posts and comments. Features real-time data fetching and
                customizable styling options for exploring trending topics.`}
          source="https://github.com/LMNTL/word-cloud-for-reddit"
        />
      </div>
    </div>
  );
}
