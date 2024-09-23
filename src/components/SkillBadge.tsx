import Badge from "./Badge";
import { FaPython as Python } from "react-icons/fa";
import { AiOutlineRuby as Ruby } from "react-icons/ai";
import { SiTypescript as Typescript } from "react-icons/si"
import styles from "./SkillBadge.module.css"

type Skill = "python" | "ruby" | "typescript" | "javascript" | "cpp";

interface IconProps {
  skill: Skill;
}

function Icon({ skill }: IconProps) {
  switch (skill) {
    case "python":
      return <Python className="w-full h-full"/>;
    case "ruby":
      return (
        <Ruby size={36} className="rotate-45 -translate-y-1" />
      );
    case "typescript":
      return <Typescript size={36} />
  }
}

interface SkillBadgeProps {
  skill: Skill;
  experience: number;
  className?: string;
}

function SkillBadge({ skill, experience, className }: SkillBadgeProps) {
  return (
    <div className={[styles.skill, className].join(" ")}>
      <div className={styles.icon}>
        <Icon skill={skill}/>
      </div>
      <Badge position="top-right" className={styles.badge}>{`${experience}+`}</Badge>
    </div>
  );
}

export default SkillBadge;
export type { Skill, SkillBadgeProps };
