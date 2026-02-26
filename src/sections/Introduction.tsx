import profile from "../assets/profile.jpg";
import Avatar from "../components/Avatar";

function Introduction() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-8">
        <Avatar image={profile} className="w-60 shadow-2xl ring-8 ring-white" />
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
  );
}

export default Introduction;
