import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [showRow1, setShowRow1] = useState(false);
  const [showRow2, setShowRow2] = useState(false);
  const [showRow3, setShowRow3] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    const timer1 = setTimeout(() => setShowRow1(true), 300);
    const timer2 = setTimeout(() => setShowRow2(true), 1500);
    const timer3 = setTimeout(() => setShowRow3(true), 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Skills data
  const skillsRow1 = [
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
    },
    {
      name: 'C++',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'
    }
  ];

  const skillsRow2 = [
    {
      name: 'React.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4'
    },
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
    }
  ];

  const skillsRow3 = [
    {
      name: 'MongoDB',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'MySQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
    },
    {
      name: 'Git',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-20">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparen"/>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Row 1 - From Right */}
          <div className="flex justify-center gap-10 md:gap-14 lg:gap-20 flex-wrap items-center min-h-[140px]">
            {skillsRow1.map((skill, index) => (
              <div
                key={skill.name}
                className={`group transition-all duration-1000 ease-out ${
                  showRow1 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[200vw] opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150"/>
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                      onError={(e) => {
                        console.error(`Failed to load icon for ${skill.name}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-cyan-400">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - From Left */}
          <div className="flex justify-center gap-10 md:gap-14 lg:gap-20 flex-wrap items-center min-h-[140px]">
            {skillsRow2.map((skill, index) => (
              <div
                key={skill.name}
                className={`group transition-all duration-1000 ease-out ${
                  showRow2 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-[200vw] opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150"/>
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                      style={skill.name === 'Express' ? {filter: 'invert(1) brightness(2)'} : {}}
                      onError={(e) => {
                        console.error(`Failed to load icon for ${skill.name}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-cyan-400">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - From Right */}
            <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap items-center min-h-[140px]">
              {skillsRow3.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group transition-all duration-1000 ease-out ${
                    showRow3 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-[200vw] opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                      <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"/>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-cyan-400">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;