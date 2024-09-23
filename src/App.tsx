import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
import SkillBadge from "./components/SkillBadge";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Avatar image={profile} className="w-80 ring-white ring-8 shadow-xl" />
      <div>
        <h1>Hi. I'm Matt.</h1>
        <h2 className="">I make software.</h2>
      </div>
      <div className="flex justify-around">
        <SkillBadge skill="python" experience={7} />
        <SkillBadge skill="typescript" experience={2} />
        <SkillBadge skill="ruby" experience={1} />
      </div>
    </div>
  );
}

export default App;
