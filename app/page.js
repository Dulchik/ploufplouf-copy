import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="bg-blue-500 text-5xl font-pacifico h-24 block py-5">
          <h1 className="text-center font-normal m-auto text-white">
            <span>Plouf, </span>
            <span>Plouf !</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="w-4/5 text-center mt-12 mb-24 mx-auto space-y-8">
          <p className="text-xl">
            Add multiple items to draw, then click Draw.
          </p>
          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <p className="opacity-60">
            (to add an item, type it above and then click the [+] button or the
            Enter key)
          </p>
          <button className="btn px-16 text-lg">Draw</button>
          <p>or</p>
          <p>
            <a>Import a list</a>
          </p>
        </div>
      </section>

      <section>
        {/* footer */}
        <div className="bg-blue-500 text-white">
          <div className="text-center">
            <p>A prpose</p>
          </div>
          <div className="flex justify-center gap-2">
            <a>name</a>
            <a>git source</a>
            <a>bugs and suggestions</a>
          </div>
        </div>
      </section>
    </main>
  );
}
