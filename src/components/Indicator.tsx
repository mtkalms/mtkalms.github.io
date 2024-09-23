import styles from "./Indicator.module.css";
import badgeStyles from "./Badge.module.css";
import { BadgeProps } from "./Badge";

type IndicatorState = "active" | "idle" | "inactive" | "busy";

interface IndicatorProps extends BadgeProps {
  status?: IndicatorState;
}

function Indicator({
  status = "inactive",
  position = "top-left",
  className,
}: IndicatorProps) {
  return (
    <span
      className={[
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
