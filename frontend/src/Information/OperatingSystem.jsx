import React from 'react';

const OperatingSystem = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Operating Systems</h1></header>
      <div>
        An operating system (OS) is a crucial component of a computer system as it manages and controls both the hardware and software resources. It provides a user-friendly interface and ensures the seamless functioning of the various applications installed on the computer.
      </div>
      <div>
        <header><h2>Windows</h2></header>
        <ul className='key-concept'>
          <li><span>Overview:</span> Microsoft Windows is ubiquitous amongst desktop and laptop users, making it a primary target for cybercriminals.</li>
          <li><span>Key Security Features:</span>
            <ul>
              <li>Windows Defender: An antivirus program that detects and removes malware.</li>
              <li>Windows Firewall: Monitors and controls incoming and outgoing network traffic.</li>
              <li>BitLocker: A full disk encryption feature for securing data.</li>
            </ul>
          </li>
          <li>As a Windows user, keeping your system up-to-date and using additional security tools such as anti-malware software is vital.</li>
        </ul>
      </div>
      <div>
        <header><h2>macOS</h2></header>
        <ul className='key-concept'>
          <li><span>Overview:</span> macOS is Apple’s operating system for Macintosh computers, known for strong security.</li>
          <li><span>Key Security Features:</span>
            <ul>
              <li>Gatekeeper: Ensures downloaded apps originate from trusted sources.</li>
              <li>FileVault 2: Offers full-disk encryption for data protection.</li>
              <li>XProtect: An antivirus tool that scans newly installed apps for malware.</li>
            </ul>
          </li>
          <li>Despite macOS’s sound security measures, running reputable security software and keeping your macOS updated is essential.</li>
        </ul>
      </div>
      <div>
        <header><h2>Linux</h2></header>
        <ul className='key-concept'>
          <li><span>Overview:</span> Linux is an open-source operating system known for its security and multi-user environment.</li>
          <li><span>Key Security Features:</span>
            <ul>
              <li>Software Repositories: Official software repositories maintained by Linux distributions provide trusted sources for software installation.</li>
              <li>SELinux (Security-Enhanced Linux): A security architecture that allows administrators to control system access.</li>
              <li>System/package updates: Regular updates offered by distributions hold essential security fixes.</li>
            </ul>
          </li>
          <li>While Linux distributions are less targeted, maintaining system updates and using security tools like antivirus software and firewalls is recommended.</li>
        </ul>
      </div>
      <div>
        <header><h2>Security Considerations</h2></header>
        <ul className='importance'>
          <li>The security of your operating system relies on timely updates, proper configuration, and the use of appropriate security tools.</li>
          <li>Stay vigilant and informed to ensure your system remains secure against ever-evolving cyber threats.</li>
        </ul>
      </div>
      <div>
        <header><h2>Learn following for Each</h2></header>
        <ul>
            <li>Installation and Configuration</li>
            <li>Different Versions and Differences</li>
            <li>Navigaitng using GUI and CLI</li>
            <li>Understand Permissions</li>
            <li>Installing Software and Applications</li>
            <li>Performing CRUD on Files</li>
            <li>Troubleshooting</li>
            <li>Common Commands</li>

        </ul>
      </div>
      
    </div>
  );
}

export default OperatingSystem;
