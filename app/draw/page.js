"use client";

import { redirect } from "next/navigation";

export default function Draw() {
  const handleModify = () => {
    redirect("/");
  };
  return (
    <main>
      <section>
        <div className="bg-blue-500 text-5xl font-pacifico h-24 block py-5">
          <h1 className="text-center font-normal m-auto text-white animate-bounce-1">
            <span className="">Plouf, </span>
            <span className="">Plouf !</span>
          </h1>
        </div>
      </section>

      <section>
        <div>
          <button className="btn px-16 text-lg" onClick={handleModify}>
            Modify
          </button>
          <button className="btn px-16 text-lg" onClick={handleModify}>
            Re-draw
          </button>
        </div>
      </section>
    </main>
  );
}
