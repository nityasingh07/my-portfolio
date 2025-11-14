import { useState, useEffect } from "react";

export default function IntroHello({ onFinish }) {
  const words = [ "Hello" ,"Hola", "こんにちは", "Bonjour", "Ciao",  "नमस्ते!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const change = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 500);

    // hide intro after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearInterval(change);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="
      fixed inset-0 flex items-center justify-center 
      bg-black z-[9999]
    ">
      {/* GLow Blob */}
      <div className="
        absolute w-64 h-64 
        bg-gradient-to-r from-blue-500 to-pink-500
        blur-3xl opacity-40 rounded-full animate-pulse
      "></div>

      {/* Text */}
      <div
        key={index}
        className="
          text-white text-6xl font-extrabold 
          opacity-100 animate-fade
        "
      >
        {words[index]}
      </div>
    </div>
  );
}
