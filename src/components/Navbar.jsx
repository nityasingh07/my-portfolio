import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActive(section);
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update active state based on current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    } else if (location.pathname === "/about") {
      setActive("about");
    } else if(location.pathname === "/skills") {
      setActive("skills");

    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-pink-500 tracking-wide">
         
        </h1>
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link
            to="/"
            className={`capitalize transition duration-300 hover:text-pink-400 ${
              active === "home" ? "text-pink-500" : ""
            }`}
            onClick={() => setActive("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`capitalize transition duration-300 hover:text-pink-400 ${
              active === "about" ? "text-pink-500" : ""
            }`}
            onClick={() => setActive("about")}
          >
            About
          </Link>
          
          {["experience", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`capitalize transition duration-300 hover:text-pink-400 ${
                active === item ? "text-pink-500" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰

        </button>

          

      </div>
      {isOpen && (
  <div className="md:hidden flex flex-col bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 text-gray-300 font-medium">
    <Link
      to="/"
      onClick={() => { setActive("home"); setIsOpen(false); }}
      className={`${active === "home" ? "text-pink-500" : ""}`}
    >
      Home
    </Link>

    <Link
      to="/about"
      onClick={() => { setActive("about"); setIsOpen(false); }}
      className={`${active === "about" ? "text-pink-500" : ""}`}
    >
      About
    </Link>

    {["experience", "skills", "projects", "contact"].map((item) => (
      <button
        key={item}
        onClick={() => { handleScroll(item); setIsOpen(false); }}
        className={`${active === item ? "text-pink-500" : ""}`}
      >
        {item}
      </button>
    ))}
  </div>
)}


    </nav>
  );

}
