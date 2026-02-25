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
import { DetailedHTMLProps, HTMLAttributes } from "react";

type Skill =
  | "python"
  | "ruby"
  | "typescript"
  | "javascript"
  | "vaadin"
  | "java"
  | "react"
  | "tailwind css";
type DivElement = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface SkillIconProps extends IconBaseProps {
  skill: Skill;
}

interface SkillBadgeProps extends Omit<DivElement, "children"> {
  skill: Skill;
  experience: number;
}

function SkillIcon({ skill, ...props }: SkillIconProps) {
  switch (skill) {
    case "python":
      return <Python {...props} />;
    case "ruby":
      return <Ruby className="-translate-y-1 rotate-45" {...props} />;
    case "typescript":
      return <Typescript {...props} />;
    case "javascript":
      return <Javascript {...props} />;
    case "java":
      return <Java {...props} />;
    case "react":
      return <React {...props} />;
    case "tailwind css":
      return <Tailwind {...props} />;
    case "vaadin":
      return <Vaadin {...props} />;
  }
}

function SkillBadge({
  skill,
  experience,
  className,
  ...props
}: SkillBadgeProps) {
  return (
    <div
      className={`relative size-16 rounded-full bg-fuchsia-800 ${className}`}
      title={`${experience}+ years in ${skill}`}
      {...props}
    >
      <div className="flex size-full items-center justify-center rounded-full text-white">
        <SkillIcon skill={skill} className="size-6/12" />
      </div>
      <Badge position="top-right" className="bg-fuchsia-900 text-white">
        {`${experience}+`}
      </Badge>
    </div>
  );
}

export default SkillBadge;
export type { Skill, SkillBadgeProps };
