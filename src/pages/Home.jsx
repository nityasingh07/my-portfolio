import React, { useState, useEffect, Suspense } from "react";
import Girl from "../components/Girl";
import {  ExternalLink } from "lucide-react";
import HelloIntro from "../components/HelloIntro.jsx";
import { Linkedin, Github, ArrowUp, Briefcase } from 'lucide-react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
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
  const [showProjectCard1, setShowProjectCard1] = useState(false);
  const [showProjectCard2, setShowProjectCard2] = useState(false);
  const [showProjectCard3, setShowProjectCard3] = useState(false);
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

  // Skills, Experience, and Projects animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const experienceSection = document.getElementById('experience');
      const projectsSection = document.getElementById('projects');
      
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

      if (projectsSection && !showProjectCard1) {
        const rect = projectsSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (inView) {
          setTimeout(() => setShowProjectCard1(true), 200);
          setTimeout(() => setShowProjectCard2(true), 500);
          setTimeout(() => setShowProjectCard3(true), 800);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showRow1, showExpCard1, showProjectCard1]);

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
      title: "AI-Powered Full-Stack Development Intern",
      company: "IGDTUW",
      duration: "Jun 2025 – Aug 2025",
      description: "Built and deployed AI-integrated full-stack web apps using React, Node.js, and MongoDB while exploring OpenAI APIs for intelligent automation."
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      duration: "Mar 2025 – Jun 2025",
      description: "Enhanced multiple open-source repositories with optimized modules, impactful UI improvements, and active collaboration through GitHub reviews."
    },
    {
      title: "Frontend Developer",
      company: "Open Source Connect India (OSCI)",
      duration: "Aug 2025 – Oct 2025",
      description: "Explored advanced open-source workflows, reviewed React-based UI components, and gained practical insights into code quality, scalability, and collaboration."
    }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "EcoTransform",
      description: "A sustainability-driven platform connecting small-scale artisans and waste suppliers — promoting recycling and upcycling with AI-driven recommendations and blockchain-based transparency..",
      image: "/Screenshot 2025-11-12 003811.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Blockchain", "AI Inetegration"],
      github: "https://github.com/jpothesis/ecotransform",
      website: "https://ecotransform-rho.vercel.app/"
    },
    {
      id: 2,
      title: "Dietly",
      description: "AI-powered web application that helps users generate customized meal plans based on their health goals, dietary preferences, and calorie requirements. It simplifies nutrition tracking and provides a visually engaging dashboard to monitor daily intake, making healthy eating easy and accessible.",
      image: "/Screenshot 2025-11-12 020532.png",
      tags: ["  Vite", "React Router", "Express.js", "Google Gemini API", "Vercel", "JWT", "bcrypt.js"],
      github: "https://github.com/vaibhavisingh876/dietly"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Co-Align is an innovative AI-driven roommate matching platform built to enhance women’s co-living experiences. By analyzing lifestyle preferences, habits, and personalities, the system intelligently recommends compatible roommates. It integrates AI-based matching algorithms and the Omnidim.io Voice Assistant to deliver a seamless, personalized, and safe co-living journey for every user.",
      image: "/models/ss.png",
      tags: ["React.js", "Vite", "Tailwind CSS"],
      github: "https://github.com/nityasingh07/my-portfolio",
      website:""
    }
  ];

  const expCardStates = [showExpCard1, showExpCard2, showExpCard3];
  const projectCardStates = [showProjectCard1, showProjectCard2, showProjectCard3];

  return (
    <>
      {showIntro ? (
         <HelloIntro onFinish={() => setShowIntro(false)} />
          
       ) : (


    

    


    
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
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-32 max-w-7xl mx-auto min-h-screen gap-10">
          <div className="flex-1 w-full text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  Hello I'm
                </span>
              </h1>
              <h1 className="text-5xl sm:text-7xl font-bold">Nitya Singh</h1>
              
              {/* Typewriter effect */}
              <div className="h-12 flex items-center">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Hi, I’m Nitya Singh, an ambitious and inquisitive student pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence from IGDTUW. A Full Stack Developer and Open Source Contributor, passionate about creating efficient, user-focused web applications and contributing to innovative, collaborative tech communities.
            </p>

            <div className="flex gap-4 pt-4">
              <a
              href="#projects"
              
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 tracking-wide">
                View My Work
                
              </a>

              <a 
                href="https://drive.google.com/file/d/16AqO5QJRWGOyLQe_BXFl3f8oSWeWPQiV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <button className="px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 tracking-wide">
                    My Resume

                  </button>

                </a>






              
            </div>



            <div className="flex gap-6 pt-8">
              <a href="https://www.linkedin.com/in/nityaasingh/" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Linkedin size={30} />
              </a>
             
                
              
              <a href="https://github.com/nityasingh07" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Github size={30} />
              </a>
            </div>

          </div>

          {/* Placeholder for 3D Character */}
          <div className="hidden md:flex flex-1 items-center justify-center h-[600px]">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-transparent">
              <Suspense fallback={null}>
                <Canvas
                
                >   
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[5, 5, 5]} intensity={2} />
                  <Girl />
                  <OrbitControls enableZoom={false}
                  maxPolarAngle={Math.PI}  minPolarAngle={0} minAzimuthAngle={-Math.PI } maxAzimuthAngle={Math.PI } />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>


        {/* Reach Out button */}

        <a 
        href="#contact"
        className="fixed top-6 right-6 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 z-50 tracking-wide">
          Reach Out
        </a>
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
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]">
              
                  <img
                  src="/download.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 rounded-3xl ring-2 ring-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    </div>



                


                
              </div>
            </div>

            {/* About Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h2 className="text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                  Nitya Singh
                </h2>
                <p className="text-2xl text-gray-300 font-medium">Full Stack Developer</p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy turning ideas into responsive, high-performing web applications with clean structure, seamless UI, and a focus on creating impactful user experiences. My toolkit spans JavaScript, React, Node.js, MongoDB, Express.js and Tailwind CSS — bringing ideas to life with smooth APIs and pixel-perfect interfaces.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                <a
                href="#projects"
                 className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 tracking-wide">
                  View Projects
                </a>
                <a 
                href="#contact"

                className="px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 tracking-wide">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="mt-20 text-center space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              I’m a tech enthusiast who loves exploring how technology can shape ideas into reality. Beyond development, I have a strong interest in graphic design, where I enjoy blending creativity with clean, modern visuals. I strive to create experiences that combine visual appeal with purpose and usability.
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
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-purple-500 shadow-lg shadow-cyan-400/30" />

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
                  <div className="absolute left-0 md:left-5 top-6 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/70" />

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

      {/* SKILLS SECTION */}
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
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
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
      <div id="projects" className="min-h-screen relative py-20 px-8 md:px-16 overflow-hidden">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`project-star-${i}`}
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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing full-stack development, creative designs, and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/20 ${
                  projectCardStates[index]
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                    
                    >
                      <website className="w-4 h-4" />
                  
                    <ExternalLink className="w-4 h-4" />
                    <span>Website</span>


                  </a>
                  




                {/* Decorative Corner Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="min-h-screen relative overflow-hidden py-20">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left side - Astronaut Image */}
            <div className="flex-1 flex items-center justify-center h-[600px] relative">

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20  to-purple-500/20 rounded-full blur-3xl" />
                <img
                 src="/brain.png"
                 alt="Brain"
                 className="relative w-[450px] h-[450px] object-contain drop-shadow-2xl"
                  />
               

            
            </div>

            {/* Right side - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-400  bg-clip-text text-transparent">
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
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-all
"
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
    )}
   </>
  

  );
}



