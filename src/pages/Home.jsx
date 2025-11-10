import { useState, useEffect } from 'react';
import { Linkedin, Github, ArrowUp, Briefcase } from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showRow1, setShowRow1] = useState(false);
  const [showRow2, setShowRow2] = useState(false);
  const [showRow3, setShowRow3] = useState(false);
  const [showExpCard1, setShowExpCard1] = useState(false);
  const [showExpCard2, setShowExpCard2] = useState(false);
  const [showExpCard3, setShowExpCard3] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const roles = [
    "Full-Stack Developer",
    "Graphic Designer",
    "Open Source Contributor"
  ];

  // Typewriter effect
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

  // Skills and Experience animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const experienceSection = document.getElementById('experience');
      
      if (skillsSection && !showRow1) {
        const rect = skillsSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (inView) {
          setTimeout(() => setShowRow1(true), 100);
          setTimeout(() => setShowRow2(true), 600);
          setTimeout(() => setShowRow3(true), 1100);
        }
      }

      if (experienceSection && !showExpCard1) {
        const rect = experienceSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (inView) {
          setTimeout(() => setShowExpCard1(true), 100);
          setTimeout(() => setShowExpCard2(true), 600);
          setTimeout(() => setShowExpCard3(true), 1100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showRow1, showExpCard1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

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

  // Experience data
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

  const expCardStates = [showExpCard1, showExpCard2, showExpCard3];

  return (
    <div className="bg-black text-white">
      {/* HOME SECTION */}
      <div id="home" className="min-h-screen relative overflow-hidden">
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

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-between px-16 py-32 max-w-7xl mx-auto min-h-screen">
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
        <button className="fixed top-6 right-6 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 z-50 tracking-wide">
          Reach Out
        </button>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="min-h-screen relative py-20 px-16">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`about-star-${i}`}
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
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-start gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-80 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl overflow-hidden border border-cyan-500/30">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
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
                  <p className="text-white text-xl font-semibold">Full Stack</p>
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
      </div>

      {/* EXPERIENCE SECTION */}
      <div id="experience" className="min-h-screen relative py-20 px-16">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`exp-star-${i}`}
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
                    expCardStates[index]
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
      </div>

      {/* SKILLS SECTION - UPDATED */}
      <div id="skills" className="min-h-screen relative py-20 px-16 overflow-hidden flex items-center justify-center">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`skills-star-${i}`}
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

        <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Skills & Tools
              </span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {/* Row 1 - From Right */}
            <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap items-center min-h-[140px]">
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

            {/* Row 2 - From Left */}
            <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap items-center min-h-[140px]">
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
                      <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"/>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                        style={skill.name === 'Express' ? {filter: 'invert(1) brightness(2)'} : {}}
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

      {/* PROJECTS SECTION */}
      <div id="projects" className="min-h-screen relative py-20 px-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 mt-4">Coming soon...</p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="min-h-screen relative overflow-hidden py-20">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`contact-star-${i}`}
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
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left side - Astronaut Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-96 h-96 bg-gradient-to-br from-teal-900/50 to-purple-900/50 rounded-full flex items-center justify-center border border-cyan-400/30">
                    <span className="text-gray-500 text-sm">Astronaut Image</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Let's Work Together
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Give a Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Something in mind?"
                    className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Explain Your Idea
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Explain your idea..."
                    rows="5"
                    className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white text-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 z-50"
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
