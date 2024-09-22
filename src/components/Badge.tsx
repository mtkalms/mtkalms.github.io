import styles from "./Badge.module.css";

type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BadgeProps {
  position?: BadgePosition;
  className?: string;
  children?: string;
}

function Badge({ position = "top-left", className, children }: BadgeProps) {
  return (
    <span
      className={[styles.badge, styles.text, styles[position], className].join(
        " "
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
export type { BadgeProps };
