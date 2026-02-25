import Parallax from "../components/Parallax";

// prettier-ignore
// eslint-disable-next-line
function TypographyExample() {
  return (
    <pre className="font-mono text-lg leading-none text-(--accent-1) lg:text-xl dark:glow-(--accent-1)">
      <span>┌┬┐      .    ┐ ┌┬┐            ┐   </span><br/>
      <span> │╭╮┬╮┬┬╮┐┬╮┌╮│  │┐╷┬╮╭╮╭┬┬╮╮┬╮├╮┐╷</span><br/>
      <span> │├┘│ ││││││╭┤│  ││││││││││╭┤││││││</span><br/>
      <span> ╵╰╴╵ ╵╵╵╵╵╵╰┘╰  ╵╰┤├╯╰╯╰┤╵╰┘├╯╵╵╰┤</span><br/>
      <span>                  └╯╵   └╯   ╵   └╯</span><br/>
      <span> enter <span className="animate-pulse text-(--accent-2) dark:glow-(--accent-2)">█</span></span>
    </pre>
  )
}

function Textual() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <Parallax.Layer speed={0.05} className="relative my-12">
          <h2 className="text-5xl leading-none font-bold uppercase lg:text-7xl dark:glow-white">
            Textual Light <br />
            and Magic
          </h2>
        </Parallax.Layer>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <Parallax className="relative overflow-visible">
            <Parallax.Layer
              speed={0.05}
              className="relative mb-12 w-full text-left"
            >
              <TypographyExample />
            </Parallax.Layer>
          </Parallax>
          <div className="max-w-xl px-16 text-left lg:px-12">
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
