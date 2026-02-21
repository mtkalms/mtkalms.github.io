import "./Panorama.css";
import Panorama5 from "@/assets/panorama-5.svg?react";
import Panorama4 from "@/assets/panorama-4.svg?react";
import Panorama3 from "@/assets/panorama-3.svg?react";
import Panorama2 from "@/assets/panorama-2.svg?react";
import Panorama1 from "@/assets/panorama-1.svg?react";
import Panorama0 from "@/assets/panorama-0.svg?react";

const layers = [
  { Component: Panorama5, index: 5 },
  { Component: Panorama4, index: 4 },
  { Component: Panorama3, index: 3 },
  { Component: Panorama2, index: 2 },
  { Component: Panorama1, index: 1 },
  { Component: Panorama0, index: 0 },
];

function Panorama() {
  return (
    <div className="panorama">
      {layers.map(({ Component, index }) => (
        <div key={index} className={`panorama-layer layer-${index}`}>
          <Component />
        </div>
      ))}
    </div>
  );
}

export default Panorama;
