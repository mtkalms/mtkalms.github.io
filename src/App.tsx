import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import ParallaxBranches from "./components/ParallaxBranches";
import Branch1 from "./assets/branch-1.svg?react";
import Branch2 from "./assets/branch-2.svg?react";
import PanoramaSection from "./sections/PanoramaSection";
import { useParallax } from "./components/Parallax";

const branchLayers = [
  { Component: Branch1, speed: -0.15 },
  { Component: Branch2, speed: -0.25 },
];

function App() {
  useParallax();
  return (
    <>
      <Navbar />
      <PanoramaSection />
      <div className="main">
        <div className="flex flex-col gap-8 items-center">
          <Avatar
            image={profile}
            className="w-40 sm:w-60 ring-white ring-8 shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-thin">
              <span className="font-normal">Hi. </span>I am{" "}
              <span className="font-normal underline decoration-4 underline-offset-4">
                Matt
              </span>
              hias.
            </h1>
          </div>
        </div>
        <ParallaxBranches layers={branchLayers}>
          <h2 className="glow-heading">Textual Light and Magic</h2>
          <div className="text-column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </ParallaxBranches>
      </div>
    </>
  );
}

export default App;
