import {
  DefaultWordRenderer,
  Word,
  WordCloud,
} from "@isoterik/react-word-cloud";
import type { CSSProperties, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface Skill extends Word {
  description?: string | ReactNode;
  color: CSSProperties["color"];
}

const skillList: Skill[] = [
  {
    text: "JavaScript",
    value: 1000,
    color: "#417e38",
  },
  { text: "React", value: 1000, color: "#58c4dc" },
  { text: "TypeScript", value: 1000, color: "#3178c6" },
  { text: "PHP", value: 1000, color: "#4F5B93" },
  { text: "Python", value: 1000, color: "#ffd343" },
  { text: "SQL", value: 1000, color: "#699eca" },
  { text: "Django", value: 1000, color: "#44B78B" },
  { text: "C#", value: 1000, color: "#ac99ea" },
  { text: "Unity", value: 1000, color: "#455463" },
];

export default function Skills() {
  return (
    <div>
      <h2>Let's talk about what I can do...</h2>
      <Card>
        <WordCloud
          words={skillList}
          width={300}
          height={200}
          fontWeight={700}
          padding={5}
          // @ts-expect-error Works!
          fill={(word) => word.color}
          rotate={() => 0 /*Math.random() * 5 - 2.5*/}
          renderWord={(data) => (
            <DefaultWordRenderer
              data={data}
              textStyle={{
                fontFamily: "Trebuchet MS",
                WebkitTextStroke: "2px white",
                cursor: "pointer",
              }}
            />
          )}
        />
      </Card>
    </div>
  );
}
