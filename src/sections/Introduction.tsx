import profile from "../assets/profile.jpg";
import Avatar from "../components/Avatar";

function Introduction() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center">
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
  );
}

export default Introduction;
