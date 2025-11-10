import { Menu, Linkedin, Github, ArrowUp } from 'lucide-react';

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
      
      <div className="relative py-20 px-16 max-w-7xl mx-auto">
        <div className="flex items-start gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl overflow-hidden border border-cyan-500/30">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                {/* Placeholder for profile image */}
                <span className="text-sm">Profile Image</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                Nitya Singh
              </h2>
              <p className="text-2xl text-gray-300 font-medium">Full Stack Developer</p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              I build scalable, modern applications with a strong focus on clean architecture, performance, and delightful UX. My toolkit spans Java, React, Node.js, MongoDB, and Tailwind CSS — bringing ideas to life with smooth APIs and pixel-perfect interfaces.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="border border-gray-700 rounded-xl p-6 h-28 hover:border-cyan-500/50 transition-colors flex flex-col justify-center">
                <p className="text-gray-400 text-sm mb-2">Experience</p>
                <p className="text-white text-xl font-semibold">Fresher</p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 h-28 hover:border-cyan-500/50 transition-colors flex flex-col justify-center">
                <p className="text-gray-400 text-sm mb-2">Specialty</p>
                <p className="text-white text-xl font-semibold">Frontend Developer</p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 h-28 hover:border-cyan-500/50 transition-colors flex flex-col justify-center">
                <p className="text-gray-400 text-sm mb-2">Focus</p>
                <p className="text-white text-xl font-semibold">Performance & UX</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 tracking-wide">
                View Projects
              </button>
              <button className="px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 tracking-wide">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            I'm a Software Developer and Tech Enthusiast who loves crafting performant, user-centric web experiences. I focus on blending clean UI design with solid engineering — building fast, reliable, and accessible web applications.
          </p>
        </div>
      </div>

      

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 z-20"
      >
        <ArrowUp size={24} />
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


