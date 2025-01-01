"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // For the input field value
  const [words, setWords] = useState([]); // For the list of words

  const handleAddWord = () => {
    if (inputValue.trim() === "") return; // Ignore empty input
    setWords((prevWords) => [...prevWords, inputValue]);
    setInputValue(""); // Clear the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddWord(); // Add word on Enter key press
    }
  };

  const handleRemoveWord = (index) => {
    setWords(words.filter((_, i) => i !== index));
  };

  const handleDraw = () => {
    redirect("/draw");
  };

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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a word..."
              style={{ flex: 1, padding: "8px" }}
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-square" onClick={handleAddWord}>
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

          <div>
            <a className="text-red-600 underline cursor-pointer">
              Remove all items
            </a>
            <div className="p-3 gap-3 flex flex-wrap justify-center">
              {words.map((word, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                >
                  {word}
                  <button onClick={() => handleRemoveWord(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-4"
                      strokeWidth="3"
                      stroke="red"
                    >
                      a
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div> // Display each word as a new paragraph
              ))}
            </div>
          </div>

          <button className="btn px-16 text-lg" onClick={handleDraw}>
            Draw
          </button>
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
