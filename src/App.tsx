import { useEffect } from "react";
import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import Panorama from "./components/Panorama";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Panorama />
      <Navbar />
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
      </div>
    </>
  );
}

export default App;
