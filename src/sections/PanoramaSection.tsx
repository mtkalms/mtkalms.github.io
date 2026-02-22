import Parallax from "../components/Parallax";
import Panorama0 from "@/assets/panorama-0.svg?react";
import Panorama1 from "@/assets/panorama-1.svg?react";
import Panorama2 from "@/assets/panorama-2.svg?react";
import Panorama3 from "@/assets/panorama-3.svg?react";
import Panorama4 from "@/assets/panorama-4.svg?react";
import Panorama5 from "@/assets/panorama-5.svg?react";

function PanoramaSection() {
  return (
    <Parallax className="bg-(--horizon) fixed top-0 left-0 w-full h-full -z-1">
      <Parallax.Layer speed={0.1}>
        <Panorama5 className="fill-(--forest-1)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.2}>
        <Panorama4 className="fill-(--forest-2)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.35}>
        <Panorama3 className="fill-(--forest-3)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.5}>
        <Panorama2 className="fill-(--forest-4)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.7}>
        <Panorama1 className="fill-(--forest-5)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.9}>
        <Panorama0 className="fill-(--forest-6)" />
      </Parallax.Layer>
    </Parallax>
  );
}

export default PanoramaSection;
