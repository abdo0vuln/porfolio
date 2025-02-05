import React, { useState } from 'react';

// Separate page components for better organization
const HomePage = () => (
  <section className="min-h-screen flex items-center">
    <div className="max-w-4xl">
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-blue-400">Abderrahmane Baaziz</span>
      </h1>
      <p className="text-xl text-gray-300 mb-6">
        Junior Penetration Tester | Cybersecurity Specialist
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Professional Profile</h3>
          <p className="text-gray-300">
            Passionate cybersecurity professional specializing in penetration testing and network security. 
            eJPTv2 certified with hands-on experience in vulnerability assessment and ethical hacking.
          </p>
        </div>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
          <div className="text-gray-300">
            <p className="font-semibold">University of Algiers</p>
            <p>Licence 2 - Cybersecurity</p>
            <p className="mt-2">Focus Areas:</p>
            <ul className="list-disc list-inside">
              <li>Network Security</li>
              <li>Ethical Hacking</li>
              <li>Web Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsPage = () => {
  const technicalSkills = [
    { name: "Penetration Testing", level: 85 },
    { name: "Network Security", level: 80 },
    { name: "Web Security", level: 75 },
    { name: "Python", level: 70 },
    { name: "Linux", level: 85 },
    { name: "OWASP Top 10", level: 80 }
  ];

  const toolsAndPlatforms = [
    { name: "Kali Linux", level: 90 },
    { name: "Burp Suite", level: 75 },
    { name: "Metasploit", level: 80 },
    { name: "Wireshark", level: 85 },
    { name: "Nmap", level: 90 }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded">
        <div 
          className="h-full bg-blue-500 rounded transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills & Expertise</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Technical Skills</h3>
          {technicalSkills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Tools & Platforms</h3>
          {toolsAndPlatforms.map(tool => (
            <SkillBar key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Certifications</h2>
      <div className="grid gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-blue-300">{cert.name}</h3>
              <span className="text-gray-400">{cert.date}</span>
            </div>
            <p className="text-gray-300 mb-2">Issuer: {cert.issuer}</p>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map(skill => (
                <span key={skill} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
  );
};

const ContactPage = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-800/30 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
        <div className="space-y-4 text-gray-300">
          <p>Email: abderrahmane.baaziz@example.com</p>
          <p>Location: Algiers, Algeria</p>
          <p>University: University of Algiers</p>
        </div>
      </div>
      
      <div className="bg-gray-800/30 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Professional Profiles</h3>
        <div className="space-y-4 text-gray-300">
          <p>LinkedIn: linkedin.com/in/abderrahmane-baaziz</p>
          <p>GitHub: github.com/abderrahmane-baaziz</p>
          <p>HackTheBox: hackthebox.com/abderrahmane</p>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-10">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-400">Portfolio</div>
          <div className="space-x-4">
            {navigationItems.map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.id ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto pt-20 px-4">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'skills' && <SkillsPage />}
        {activeSection === 'certificates' && <CertificatesPage />}
        {activeSection === 'contact' && <ContactPage />}
      </main>
    </div>
  );
};

export default Portfolio;
