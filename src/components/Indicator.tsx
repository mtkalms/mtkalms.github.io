import styles from "./Indicator.module.css";
import badgeStyles from "./Badge.module.css";

type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type IndicatorState = "active" | "idle" | "inactive" | "busy";

interface IndicatorProps {
  status?: IndicatorState;
  position?: BadgePosition;
  className?: string;
}

function Indicator({
  status = "inactive",
  position = "top-left",
  className,
}: IndicatorProps) {
  return (
    <span
      className={[
        badgeStyles.badge,
        badgeStyles[position],
        styles.indicator,
        styles[status],
        className,
      ].join(" ")}
    />
  );
}

export default Indicator;
export type { IndicatorProps };
