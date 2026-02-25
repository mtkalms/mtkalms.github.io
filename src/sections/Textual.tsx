import Parallax from "../components/Parallax";

function Textual() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <Parallax.Layer speed={0.05} className="relative my-12">
          <h2 className="dark:glow-white leading-none uppercase lg:text-7xl text-5xl font-bold">
            Textual Light <br />
            and Magic
          </h2>
        </Parallax.Layer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Parallax className="relative overflow-visible">
            <Parallax.Layer
              speed={0.05}
              className="relative mb-12 w-full text-left"
            >
              <pre className="text-(--accent-1) dark:glow-(--accent-1) leading-none font-mono text-lg lg:text-xl">
                {/* prettier-ignore */}
                <>
                  <span>┌┬┐      .    ┐ ┌┬┐            ┐   </span><br/>
                  <span> │╭╮┬╮┬┬╮┐┬╮┌╮│  │┐╷┬╮╭╮╭┬┬╮╮┬╮├╮┐╷</span><br/>
                  <span> │├┘│ ││││││╭┤│  ││││││││││╭┤││││││</span><br/>
                  <span> ╵╰╴╵ ╵╵╵╵╵╵╰┘╰  ╵╰┤├╯╰╯╰┤╵╰┘├╯╵╵╰┤</span><br/>
                  <span>                  └╯╵   └╯   ╵   └╯</span><br/>
                  <span> enter{" "}
                    <span className="animate-pulse text-(--accent-2) dark:glow-(--accent-2)">
                      █
                    </span>
                  </span>
                </>
              </pre>
            </Parallax.Layer>
          </Parallax>
          <div className="text-left max-w-xl px-16 lg:px-12">
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
        </div>
      </div>
    </div>
  );
}

export default Textual;
