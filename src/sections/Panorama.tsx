import Parallax from "../components/Parallax";
import Panorama0 from "@/assets/panorama-0.svg?react";
import Panorama1 from "@/assets/panorama-1.svg?react";
import Panorama2 from "@/assets/panorama-2.svg?react";
import Panorama3 from "@/assets/panorama-3.svg?react";
import Panorama4 from "@/assets/panorama-4.svg?react";
import Panorama5 from "@/assets/panorama-5.svg?react";

function Panorama() {
  return (
    <Parallax className="panorama horizon fixed top-0 left-0 -z-1 h-full w-full bg-(--horizon)">
      <Parallax.Layer speed={0.1}>
        <Panorama5 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-1)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.2}>
        <Panorama4 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-2)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.35}>
        <Panorama3 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-3)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.5}>
        <Panorama2 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-4)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.7}>
        <Panorama1 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-5)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.9}>
        <Panorama0 className="theme-transition absolute bottom-0 left-0 h-full w-full fill-(--forest-6)" />
        <div className="theme-transition margin absolute top-full h-1/3 w-full bg-(--forest-6)" />
      </Parallax.Layer>
    </Parallax>
  );
}

export default Panorama;
