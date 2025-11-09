import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };
  

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-500 tracking-wide">
          My Portfolio
        </h1>
        <div className="flex space-x-8 text-gray-300 font-medium">
          {["home", "about", "experience", "skills", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={`capitalize transition duration-300 hover:text-pink-400 ${
                  active === item ? "text-pink-500" : ""
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

