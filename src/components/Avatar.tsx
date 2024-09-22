import { ReactElement } from "react";
import styles from "./Avatar.module.css";
import Indicator, { IndicatorProps } from "./Indicator";

interface AvatarProps {
  image: string;
  active?: boolean;
  className?: string;
  children?: ReactElement<IndicatorProps>;
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

export default Avatar;
export type { AvatarProps };
