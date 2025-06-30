import { Card } from "@/components/ui/card";
import styles from "@/styles/about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <Card title="A brief overview of Jessica." innerClass={styles.inner}>
        <img src="me.jpg" className={styles.photo} />
        <p>
          I've been programming since I was 8, when I made a text adventure on
          my parents' Compaq Presario in QBASIC. That led me to{" "}
          <a href="https://en.wikipedia.org/wiki/HyperCard">HyperCard</a>, and
          eventually C++ and early HTML/JavaScript. I spent my lunch periods in
          the computer room, solving people's technical issues and coding little
          games and webpages. I was hooked.
        </p>
        <p>
          My career has taken me a number of places since then. I spent a while
          in non-profit before moving my focus solely onto software engineering.
          Now, after nearly a decade in the industry, I've developed a number of
          talents across the development stack. Focusing on one small part of a
          stack can lead to stagnancy and myopia, so I'm always striving to
          learn more - devops, CI/CD, databases, testing automation, AI/ML, etc.
          If you're not growing your skills, you're falling behind.
        </p>
        <p>
          Leaders hold responsibilities towards those that follow them: to act
          in their best interests and to lead them in a direction of growth. In
          my professional and volunteer work, I do my best to honor those
          responsibilities, even when it's hard. No matter where I go, I'm
          deeply proud of the people I've taught - and the ones I've learned
          from. There's a lot of overlap between the two.
        </p>
        <p>
          In my free time, I try to follow my joy. You might find me
          woodworking, lifting weights, kickboxing, cooking a family-style meal
          for my roommates, or heading to a waterpark. I'm a licensed reverend,
          a former pharmacy tech, and founder of my own grassroots non-profit.
        </p>
      </Card>
    </div>
  );
}
