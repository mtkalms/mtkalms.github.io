import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import SkillBadge from "./components/SkillBadge";
import Navbar from "./components/Navbar";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
} from "react-icons/fa";

function App() {
  return <>
    <Navbar/>
    <div className="main">
      <div className="flex flex-col gap-8 items-center">
        <Avatar
          image={profile}
          className="w-40 sm:w-60 ring-white ring-8 shadow-2xl"
        />
        <div>
          <h1>Hi. I'm Matt.</h1>
          <h2 className="text-2xl font-semibold">I make software.</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <SkillBadge skill="python" experience={8} />
          <SkillBadge skill="java" experience={5} />
          <SkillBadge skill="typescript" experience={2} />
          <SkillBadge skill="ruby" experience={1} />
        </div>
        <div className="flex flex-row justify-around gap-5 items-center">
          <a href="https://github.com/mtkalms" target="_blank">
            <Github size={30} className="hover:fill-pink-200 fill-pink-300 hover:animate-pulse" />
          </a>
          <a href="https://www.linkedin.com/in/matthias-kalms/" target="_blank">
            <Linkedin size={32} className="hover:fill-pink-200 fill-pink-300 hover:animate-pulse" />
          </a>
          <a href="mailto:mtkalms@gmail.com" target="_blank">
            <Mail size={34} className="hover:fill-pink-200 fill-pink-300 hover:animate-pulse"/>
          </a>
        </div>
      </div>
    </div>
  </>
}

export default App;
