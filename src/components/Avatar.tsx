import styles from "./Avatar.module.css";

type AvatarBadgePosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface AvatarProps {
  image: string;
  active?: boolean;
  className?: string;
  badgePosition?: AvatarBadgePosition;
}

function Avatar({
  image,
  className,
  active,
  badgePosition = "top-left",
}: AvatarProps) {
  return (
    <div className={[className, styles.container].join(" ")}>
      <img src={image} className={styles.image} />
      {active && (
        <span className={[styles.badge, styles[badgePosition]].join(" ")} />
      )}
    </div>
  );
}

export default Avatar;
export type { AvatarProps };
