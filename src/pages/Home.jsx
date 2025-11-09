import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white pt-24"
    >
      <h1 className="text-5xl font-bold mb-4">Hello I'm Nitya Singh</h1>

      <h2 className="text-2xl text-pink-400">
        <ReactTyped
          strings={[
            "Full-Stack Developer",
            "Graphic Designer",
            "Open Source Contributor",
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
      </h2>
    </section>
  );
}
