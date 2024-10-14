import { ReactNode } from "react";
import styles from "./Avatar.module.css";
import Indicator from "./Indicator";
import Badge from "./Badge";

interface AvatarProps {
  image: string;
  active?: boolean;
  className?: string;
  children?: ReactNode;
}

function Avatar({ image, className, children }: AvatarProps) {
  return (
    <div className={[styles.container, className].join(" ")}>
      <img src={image} className={styles.image} />
      {children}
    </div>
  );
}

Avatar.Indicator = Indicator;
Avatar.Badge = Badge;

export default Avatar;
export type { AvatarProps };
