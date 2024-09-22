import profile from "./assets/profile.jpg";
import "./App.css";
import Avatar from "./components/Avatar";
function App() {

  return (
    <>
      <Avatar
        image={profile}
        className="w-20"
      />
    </>
  );
}

export default App;
