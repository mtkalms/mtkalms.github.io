import { IconBaseProps } from "react-icons";
import { AiOutlineRuby as Ruby } from "react-icons/ai";
import {
  FaJava as Java,
  FaPython as Python,
  FaReact as React,
  FaVaadin as Vaadin,
} from "react-icons/fa";
import {
  SiJavascript as Javascript,
  SiTailwindcss as Tailwind,
  SiTypescript as Typescript,
} from "react-icons/si";
import Badge from "./Badge";
import styles from "./SkillBadge.module.css";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type Skill = "python" | "ruby" | "typescript" | "javascript" | "vaadin" | "java" | "react" | "tailwind css";

interface SkillIconProps extends IconBaseProps {
  skill: Skill;
}

interface SkillBadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skill: Skill;
  experience: number;
}

function SkillIcon({skill, ...props}: SkillIconProps) {
  switch (skill) {
    case "python":
      return <Python {...props}/>;
    case "ruby":
      return <Ruby className="rotate-45 -translate-y-1" {...props}/>;
    case "typescript":
      return <Typescript {...props}/>;
    case "javascript":
      return <Javascript {...props}/>;
    case "java":
      return <Java {...props}/>;
    case "react":
      return <React {...props}/>;
    case "tailwind css":
      return <Tailwind {...props}/>;
    case "vaadin":
      return <Vaadin {...props}/>;
  }
}

function SkillBadge({ skill, experience, className, ...props }: SkillBadgeProps) {
  return (
    <div className={[styles.skill, className].join(" ")} 
      title={`${experience}+ years in ${skill}`}
      {...props}>
      <div className={styles.icon}>
        <SkillIcon skill={skill} />
      </div>
      <Badge position="top-right"
        className={styles.badge}
      >{`${experience}+`}</Badge>
    </div>
  );
}

export default SkillBadge;
export type { Skill, SkillBadgeProps };
