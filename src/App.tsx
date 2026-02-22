import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import Panorama from "./sections/Panorama";
import { useParallax } from "./components/Parallax";
import Textual from "./sections/Textual";
import SocialBadge from "./components/SocialBadge";

function App() {
  useParallax();
  return (
    <>
      <Navbar />
      <Panorama />
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
        <Textual />
        <footer className="w-full py-16 mt-16 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <SocialBadge
              type="Linkedin"
              href="https://linkedin.com/in/matthias-kalms"
            />
            <SocialBadge type="Github" href="https://github.com/mtkalms" />
          </div>
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} mtkalms. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
