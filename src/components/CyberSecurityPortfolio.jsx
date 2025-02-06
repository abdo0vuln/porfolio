import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
};

// Animation variants for children elements
const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Card hover animation
const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// HomePage component
const HomePage = () => (
  <motion.section 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen flex flex-col justify-between"
  >
    <div className="flex items-center">
      <div className="max-w-4xl">
        <motion.h1 
          variants={childVariants}
          className="text-5xl font-bold mb-4"
        >
          <span className="text-blue-400">Abderrahmane Baaziz</span>
        </motion.h1>
        <motion.p 
          variants={childVariants}
          className="text-xl text-gray-300 mb-6"
        >
          Junior Penetration Tester | Cybersecurity Student
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-gray-800/30 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Professional Profile</h3>
            <p className="text-gray-300">
              Passionate cybersecurity professional specializing in penetration testing and network security. 
              eJPTv2 certified with hands-on experience in vulnerability assessment and ethical hacking.
            </p>
          </motion.div>
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-gray-800/30 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
            <div className="text-gray-300">
              <p className="font-semibold">University of Algiers</p>
              <p>Licence 2 - Computer Science</p>
              <p className="mt-2">Focus Areas:</p>
              <ul className="list-disc list-inside">
                <li>Web Security</li>
                <li>Mobile App hacking</li>
                <li>Web Dev</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
    <motion.div
      variants={childVariants}
      className="text-center text-gray-400 py-4"
    >
      <p>&copy; {new Date().getFullYear()} Abderrahmane Baaziz. All rights reserved.</p>
    </motion.div>
  </motion.section>
);

// SkillBar component with animation
const SkillBar = ({ name, level }) => (
  <motion.div 
    variants={childVariants}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-gray-300">{name}</span>
      <span className="text-blue-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="h-full bg-blue-500 rounded"
      />
    </div>
  </motion.div>
);

// SkillsPage component
const SkillsPage = () => {
  const technicalSkills = [
    { name: "Penetration Testing", level: 70 },
    { name: "Network Security", level: 65 },
    { name: "Web Security", level: 75 },
    { name: "Python", level: 70 },
    { name: "Linux", level: 85 },
    { name: "OWASP Top 10", level: 80 },
    { name: "Web dev", level: 67 }
  ];

  const toolsAndPlatforms = [
    { name: "Kali Linux", level: 90 },
    { name: "Burp Suite", level: 85 },
    { name: "Metasploit", level: 60 },
    { name: "Wireshark", level: 45 },
    { name: "Nmap", level: 90 }
  ];

  return (
    <motion.section 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12"
    >
      <motion.h2 
        variants={childVariants}
        className="text-3xl font-bold mb-8 text-blue-400"
      >
        Skills & Expertise
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          variants={cardHoverVariants}
          whileHover="hover"
          className="bg-gray-800/30 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Technical Skills</h3>
          {technicalSkills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>

        <motion.div 
          variants={cardHoverVariants}
          whileHover="hover"
          className="bg-gray-800/30 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Tools & Platforms</h3>
          {toolsAndPlatforms.map(tool => (
            <SkillBar key={tool.name} {...tool} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ProjectCard component with animation
const ProjectCard = ({ project, index }) => (
  <motion.div 
    variants={childVariants}
    whileHover="hover"
    initial="initial"
    animate="animate"
    className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all"
  >
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-semibold text-blue-300">{project.title}</h3>
        </div>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm mb-3"
        >
          {project.type}
        </motion.span>
        <p className="text-gray-300 mb-4">{project.description}</p>
      </div>
      
      <div className="mt-auto">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </motion.a>
      </div>
    </div>
  </motion.div>
);

// ProjectsPage component
const ProjectsPage = () => {
  const projects = [
    {
      title: "Magisk Android Root",
      description: "Magisk is an open-source suite for customizing Android (Android 6.0+), offering features like root access (MagiskSU), module installation for modifying partitions, boot image management (MagiskBoot), and running code in app processes (Zygisk).",
      technologies: ["C++", "Android",],
      githubLink: "https://github.com/abdo0vuln/Magisk",
      type: "Security Tool"
    },
    {
     
      title: "Capture the Flag (CTF) Site(team project)",
      description: "A beginner-friendly CTF site with 8 challenges in cryptography, OSINT, and math, designed to help you test and improve your problem-solving skills.",
      technologies: ["HTML5", "Bootstrap", "NodeJs", "MongoDB"],
      githubLink: "https://github.com/octobit-club/octobit_opening_event",  // Replace with your actual GitHub link if available
      type: "Web Application"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects, skills, and achievements. Built using React, hosted on Vercel.",
      technologies: ["React", "vercel"],
      githubLink: "https://github.com/abdo0vuln/porfolio",  // Replace with your actual GitHub link
      type: "Web Application",
      projectType: "Solo Project"
    }
    
  ];

  return (
    <motion.section 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12"
    >
      <motion.h2 
        variants={childVariants}
        className="text-3xl font-bold mb-8 text-blue-400"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

// CertificateCard component with animation
const CertificateCard = ({ cert, index }) => (
  <motion.div 
    variants={childVariants}
    whileHover="hover"
    className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-semibold text-blue-300">{cert.name}</h3>
      <motion.span 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="text-gray-400"
      >
        {cert.date}
      </motion.span>
    </div>
    <p className="text-gray-300 mb-2">Issuer: {cert.issuer}</p>
    <p className="text-gray-300 mb-4">{cert.description}</p>
    <div className="flex flex-wrap gap-2">
      {cert.skills.map((skill, i) => (
        <motion.span 
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 + 0.2 }}
          className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

// CertificatesPage component
const CertificatesPage = () => {
  const certificates = [
    {
      name: "eJPTv2",
      issuer: "eLearnSecurity",
      date: "2024",
      description: "Professional certification demonstrating practical penetration testing skills",
      skills: ["Network Penetration Testing", "Web App Security", "Host Security"]
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Foundation in cybersecurity concepts and best practices",
      skills: ["Security Fundamentals", "Network Security", "Security Policies"]
    }
  ];

  return (
    <motion.section 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12"
    >
      <motion.h2 
        variants={childVariants}
        className="text-3xl font-bold mb-8 text-blue-400"
      >
        Certifications
      </motion.h2>
      <div className="grid gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

// ContactPage component with enhanced animations
const ContactPage = () => {
  const contactInfo = [
    { label: "Email", value: "contact.baaziz@gmail.com" },
    { label: "Location", value: "Algiers, Algeria" },
    { label: "University", value: "University of Algiers" }
  ];

  const profiles = [
    { label: "LinkedIn", value: "https://www.linkedin.com/in/abderrahmane-baaziz-0305032bb/", icon: "/icons/linkedin.png" },
    { label: "GitHub", value: "https://github.com/abdo0vuln", icon: "/icons/github.png" },
    { label: "TryHackMe", value: "https://tryhackme.com/p/vuln0sec", icon: "/icons/hackthebox.svg" }
  ];

  return (
    <motion.section 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12"
    >
      <motion.h2 
        variants={childVariants}
        className="text-3xl font-bold mb-8 text-blue-400"
      >
        Contact
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          variants={cardHoverVariants}
          whileHover="hover"
          className="bg-gray-800/30 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.p 
                key={item.label}
                variants={childVariants}
                custom={index}
                className="text-gray-300"
              >
                <span className="font-semibold">{item.label}:</span> {item.value}
              </motion.p>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          variants={cardHoverVariants}
          whileHover="hover"
          className="bg-gray-800/30 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Professional Profiles</h3>
          <div className="space-y-4">
            {profiles.map((profile, index) => (
              <motion.p 
                key={profile.label}
                variants={childVariants}
                custom={index}
                className="text-gray-300"
              >
                <span className="font-semibold">{profile.label}:</span> {profile.value}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Navigation item with animation
const NavItem = ({ item, activeSection, onClick }) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(item.id)}
    className={`px-4 py-2 rounded-md transition-colors ${
      activeSection === item.id 
        ? 'text-blue-400 bg-gray-800/50' 
        : 'text-gray-300 hover:text-blue-400'
    }`}
  >
    {item.label}
  </motion.button>
);

// Main Portfolio component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-10"
      >
        <nav className="container mx-auto flex justify-between items-center p-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-blue-400"
          >
            My Portfolio
          </motion.div>
          <div className="space-x-2">
            {navigationItems.map(item => (
              <NavItem
                key={item.id}
                item={item}
                activeSection={activeSection}
                onClick={setActiveSection}
              />
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="container mx-auto pt-20 px-4">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <HomePage key="home" />}
          {activeSection === 'skills' && <SkillsPage key="skills" />}
          {activeSection === 'projects' && <ProjectsPage key="projects" />}
          {activeSection === 'certificates' && <CertificatesPage key="certificates" />}
          {activeSection === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Portfolio;
