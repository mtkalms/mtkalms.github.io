import Parallax from "../components/Parallax";

function Textual() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center pt-2">
      <Parallax>
        <Parallax.Layer speed={0.025} className="relative">
          <h2 className="glow-heading">
            Textual Light <br />
            and Magic
          </h2>
        </Parallax.Layer>
      </Parallax>
      <div className="text-column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
}

export default Textual;
