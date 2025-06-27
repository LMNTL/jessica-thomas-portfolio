import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <Card>
      <h1>
        <a href="#two">About me</a>
      </h1>
      <ul>
        <li>
          I've been programming since I was 8, when I made a text adventure on
          my parents' Compaq Presario. That led me to{" "}
          <a href="https://en.wikipedia.org/wiki/HyperCard">HyperCard</a>, and
          eventually C++.
        </li>
        <li>
          In university, I was the webmaster for our science department (using
          Dreamweaver 😅) and worked tech support in the computer lab. My
          undergraduate research used atomic force microscopes to model novel
          proteins, in a collaboration between the biology, chemistry and
          physics department.
        </li>
        <li>
          The research was fine, but the part that excited me the most was
          modifying open-source code to predict the results and create
          visualizations. I was hooked.
        </li>
        <li></li>
      </ul>
    </Card>
  );
}
