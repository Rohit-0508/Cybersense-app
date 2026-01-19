import React, { useState, useRef,useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveContent }) => {
  const [isActive, setIsActive] = useState(null);
  const introRef = useRef(null);

  const handleButtonClick = (li, content) => {
    if (isActive) {
      isActive.classList.remove('active');
    }

    li.classList.add('active');
    setActiveContent(content);
    setIsActive(li);
  };

  // Initialize active state for the first item on mount
  useEffect(() => {
    if (introRef.current) {
      handleButtonClick(introRef.current, 'learn');
    }
  }, []);

  return (
    <div className="sidebar">
      <p>Getting Started</p>
      <ul>
        <li ref={introRef} onClick={(e) => handleButtonClick(e.target, 'introduction')}>
          Introduction
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'intro_threat')}>
          Types of Cyber Threats
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'vulnerability')}>
          Vulnerabilities in Cybersecurity
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'connectionTypes')}>
          Connection Types and their function
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'troubleshooting')}>
          Os-Independent Troubleshooting
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'computerNetworking')}>
          Basics of Computer Networking
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'operatingSystem')}>
          Operating System
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'commonCommands')}>
          Common Commands for OS
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'commonProtocols')}>
          Common Protocols
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'topologies')}>Network Topologies</li>
        <li onClick={(e) => handleButtonClick(e.target, 'virtualization')}>
          Virtualization Technologies
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'authMethodology')}>
          Authorization Methodologies
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'cryptography')}>Basics of Cryptography</li>
        <li onClick={(e) => handleButtonClick(e.target, 'secureProtocols')}>Secure Protocols</li>
        <li onClick={(e) => handleButtonClick(e.target, 'frameworks')}>
          Understanding FRAMEWORKS
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'hacking')}>Common Distros for HACKING</li>
        <li onClick={(e) => handleButtonClick(e.target, 'cloudServices')}>
          Understanding Cloud Services
        </li>
        <li onClick={(e) => handleButtonClick(e.target, 'cloudEnvironments')}>
          Understanding Cloud Environments
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
