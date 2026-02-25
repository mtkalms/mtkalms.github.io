import { IconBaseProps } from "react-icons";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
} from "react-icons/fa";

type SocialType = "Github" | "Linkedin" | "Mail";

interface SocialIconProps extends IconBaseProps {
  type: SocialType;
}

interface SocialBadgeProps extends IconBaseProps {
  type: SocialType;
  href: string;
}

function SocialIcon({ type, ...props }: SocialIconProps) {
  switch (type) {
    case "Github":
      return <Github {...props} />;
    case "Linkedin":
      return <Linkedin {...props} />;
    case "Mail":
      return <Mail {...props} />;
    default:
      return <div />;
  }
}

function SocialBadge({ type, href, className, ...props }: SocialBadgeProps) {
  return (
    <a href={href} target="_blank" className="className">
      <SocialIcon
        type={type}
        size={30}
        className="fill-white hover:animate-pulse dark:fill-pink-300 dark:hover:fill-pink-200"
        {...props}
      />
    </a>
  );
}

export default SocialBadge;
