import React, { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    const timer1 = setTimeout(() => setShowCard1(true), 300);
    const timer2 = setTimeout(() => setShowCard2(true), 800);
    const timer3 = setTimeout(() => setShowCard3(true), 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const experiences = [
    {
      title: "Microsoft Learn Student Ambassador",
      company: "Microsoft",
      duration: "2024-Current",
      description: "Serving as a Microsoft Learn Student Ambassador. Organizing tech events, workshops, and community sessions to empower students."
    },
    {
      title: "Team Lead and Event Organizer",
      company: "Knowvy Technologies",
      duration: "2025-Current",
      description: "Building Knowvy Technologies, a community for students. As an event organizer and community lead I have guided 300+ students and organised 10+ events."
    },
    {
      title: "Event Coordinator",
      company: "MLH",
      duration: "2025",
      description: "Organized a Major League Hacking (MLH) hackathon, leading event planning, sponsorships, and participant engagement to create an impactful and collaborative developer experience."
    }
  ];

  const cardStates = [showCard1, showCard2, showCard3];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-16 relative overflow-hidden">
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
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 md:pl-24 transition-all duration-700 ${
                  cardStates[index]
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-20 opacity-0'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-6 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50" />

                {/* Experience Card */}
                <div className="group bg-black border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
};

export default Experience;
