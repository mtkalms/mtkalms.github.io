import Badge from "./Badge";
import { AiOutlineRuby as Ruby } from "react-icons/ai";
import { SiTypescript as Typescript, SiTailwindcss as Tailwind, SiJavascript as Javascript } from "react-icons/si";
import { FaPython as Python, FaJava as Java, FaReact as React, FaVaadin as Vaadin } from "react-icons/fa";
import styles from "./SkillBadge.module.css";

type Skill = "python" | "ruby" | "typescript" | "javascript" | "vaadin" | "java" | "react" | "tailwind css";

interface IconProps {
  skill: Skill;
}

function Icon({ skill }: IconProps) {
  switch (skill) {
    case "python":
      return <Python />;
    case "ruby":
      return <Ruby className="rotate-45 -translate-y-1" />;
    case "typescript":
      return <Typescript />;
    case "javascript":
      return <Javascript />;
    case "java":
      return <Java />;
    case "react":
      return <React/>;
    case "tailwind css":
      return <Tailwind/>;
    case "vaadin":
      return <Vaadin/>;
  }
}

interface SkillBadgeProps {
  skill: Skill;
  experience: number;
  className?: string;
}

function SkillBadge({ skill, experience, className }: SkillBadgeProps) {
  return (
    <div className={[styles.skill, className].join(" ")} title={`${experience}+ years in ${skill}`}>
      <div className={styles.icon}>
        <Icon skill={skill} />
      </div>
      <Badge
        position="top-right"
        className={styles.badge}
      >{`${experience}+`}</Badge>
    </div>
  );
}

export default SkillBadge;
export type { Skill, SkillBadgeProps };
