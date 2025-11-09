import { useState, useEffect } from 'react';
import { Menu, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "Graphic Designer",
    "Open Source Contributor"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        if (text !== currentRole) {
          setText(currentRole.substring(0, text.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text !== '') {
          setText(currentRole.substring(0, text.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            N
          </span>
          <span className="text-xl font-light">Nitya Singh</span>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Menu size={28} />
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between px-16 py-20 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Hello I'm
              </span>
            </h1>
            <h1 className="text-7xl font-bold">Nitya Singh</h1>
            
            {/* Typewriter effect */}
            <div className="h-12 flex items-center">
              <span className="text-2xl text-cyan-400 font-medium">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 tracking-wide">
              View My Work
            </button>
            <button className="px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 tracking-wide">
              My Resume
            </button>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={28} />
            </a>
          </div>
        </div>

        {/* Placeholder for 3D Character */}
        <div className="flex-1 flex items-center justify-center">
          {/* 3D character will be added later */}
        </div>
      </div>

      {/* Reach Out button */}
      <button className="fixed top-6 right-6 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 z-20 tracking-wide">
        Reach Out
      </button>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}