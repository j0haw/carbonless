import React from "react";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="font-primary w-full h-full absolute justify-center items-center bg-zinc-00">
      <header className="flex justify-between items-center text-stone-950 py-4 px-8 md:px-16 bg-zinc-950">
        <a href=".">
          <img src={logo} alt="carbonlesslogo" className=" h-8" />
        </a>
        <ul className="flex justify-between items-center text-zinc-100">
          <li className="text-l inline-block mx-2 p-4">
            <a href=".">Home</a>
          </li>
          <li className=" text-l inline-block mx-2 p-4">
            <a href=".">O nas</a>
            <a className="text-xs" href=".">
              [konfigurator]
            </a>
          </li>
          <li className=" text-l inline-block mx-2 p-4">
            <a href=".">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default App;
