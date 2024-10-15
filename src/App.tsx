import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import SkillBadge from "./components/SkillBadge";
import Navbar from "./components/Navbar";
import SocialBadge from "./components/SocialBadge";

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
          <h1 className="text-6xl font-thin">
            <span className="font-normal">Hi. </span> 
            I am <span className="font-normal underline decoration-4 underline-offset-4">Matt</span>hias.</h1>
          <h2 className="text-4xl font-thin">I make unusable software usable.</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-5">
            <SkillBadge skill="python" experience={8} />
            <SkillBadge skill="java" experience={5} />
            <SkillBadge skill="typescript" experience={2} />
            <SkillBadge skill="ruby" experience={1} />
          </div>
          <div className="flex gap-5">
            <SkillBadge skill="react" experience={2} />
            <SkillBadge skill="tailwind css" experience={2} />
            <SkillBadge skill="vaadin" experience={2} />
          </div>
        </div>
        <div className="flex flex-row justify-around gap-5 items-center">
          <SocialBadge type="Github" href="https://github.com/mtkalms"/>
          <SocialBadge type="Linkedin" href="https://www.linkedin.com/in/matthias-kalms/"/>
          <SocialBadge type="Mail" href="mailto:mtkalms@gmail.com"/>
        </div>
      </div>
    </div>
  </>
}

export default App;
