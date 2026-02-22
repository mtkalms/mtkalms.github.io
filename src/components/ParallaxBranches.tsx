import { ReactNode } from "react";
import "./ParallaxBranches.css";

interface BranchLayer {
  Component: React.FC<React.SVGProps<SVGElement>>;
  speed: number;
}

interface ParallaxBranchesProps {
  layers: BranchLayer[];
  children: ReactNode;
}

function ParallaxBranches({ layers, children }: ParallaxBranchesProps) {
  return (
    <div className="parallax-wrapper">
      {layers.map((layer, index) => (
        <div
          key={index}
          className="branch-layer"
          style={{
            transform: `translateY(calc(var(--scroll-y, 0) * ${layer.speed}px))`,
          }}
        >
          <layer.Component />
        </div>
      ))}
      <div className="parallax-content">{children}</div>
    </div>
  );
}

export default ParallaxBranches;
