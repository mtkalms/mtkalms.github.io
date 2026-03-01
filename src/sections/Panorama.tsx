import Parallax from "../components/Parallax";
import Introduction from "./Introduction";

function Panorama() {
  return (
    <Parallax className="panorama horizon fixed top-0 left-0 -z-1 h-full w-full bg-(--horizon)">
      <Parallax.Layer speed={0.1}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-1) mask-[url('./assets/panorama-5.svg')] mask-cover" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.2}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-2) mask-[url('./assets/panorama-4.svg')] mask-cover" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.35}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-3) mask-[url('./assets/panorama-3.svg')] mask-cover" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.5}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-4) mask-[url('./assets/panorama-2.svg')] mask-cover" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.7}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-5) mask-[url('./assets/panorama-1.svg')] mask-cover" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.9}>
        <div className="theme-transition absolute bottom-0 left-0 h-full w-full bg-(--forest-6) mask-[url('./assets/panorama-0.svg')] mask-cover" />
        <div className="theme-transition margin absolute top-full h-1/3 w-full bg-(--forest-6)" />
      </Parallax.Layer>
      <Parallax.Layer speed={0.7}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Introduction />
        </div>
      </Parallax.Layer>
    </Parallax>
  );
}

export default Panorama;
