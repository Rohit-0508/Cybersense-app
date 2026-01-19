import React from 'react';

const CommonCommands = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Common Commands</h1></header>
      <div>
        In this guide, we will cover essential common commands you need to know when starting your journey in cyber security. By becoming proficient in these commands, you will be able to navigate, analyze, and manage different aspects of systems and networks. The list will cover command prompts, shell commands, and other tools.
      </div>
      <div>
        <header><h2>Operating System Commands</h2></header>
        <div>
          <header><h3>Windows</h3></header>
          <ul className='key-concept'>
            <li><span>ipconfig:</span> Display the IP configuration for all network interfaces on the device.</li>
            <li><span>netstat:</span> Display active network connections, listening ports, and routing tables.</li>
            <li><span>systeminfo:</span> Display detailed information about the computer’s hardware and software configuration.</li>
            <li><span>nslookup:</span> Look up the IP address of a domain or host.</li>
            <li><span>ping:</span> Send a series of network packets to test network connectivity.</li>
          </ul>
        </div>
        <div>
          <header><h3>Linux/Unix/MacOS</h3></header>
          <ul className='key-concept'>
            <li><span>ifconfig:</span> Display the IP configuration for all network interfaces on the device.</li>
            <li><span>netstat:</span> Display active network connections, listening ports, and routing tables.</li>
            <li><span>uname -a:</span> Display detailed information about the operating system.</li>
            <li><span>dig:</span> Look up the IP address of a domain or host.</li>
            <li><span>ping:</span> Send a series of network packets to test network connectivity.</li>
          </ul>
        </div>
      </div>
      <div>
        <header><h2>File System Commands</h2></header>
        <div>
          <header><h3>Windows</h3></header>
          <ul className='key-concept'>
            <li><span>dir:</span> List files and directories in the current directory.</li>
            <li><span>cd:</span> Change the current directory.</li>
            <li><span>copy:</span> Copy files from one location to another.</li>
            <li><span>move:</span> Move files from one location to another.</li>
            <li><span>del:</span> Delete specified files.</li>
          </ul>
        </div>
        <div>
          <header><h3>Linux/Unix/MacOS</h3></header>
          <ul className='key-concept'>
            <li><span>ls:</span> List files and directories in the current directory.</li>
            <li><span>cd:</span> Change the current directory.</li>
            <li><span>cp:</span> Copy files from one location to another.</li>
            <li><span>mv:</span> Move files from one location to another.</li>
            <li><span>rm:</span> Delete specified files.</li>
          </ul>
        </div>
      </div>
      <div>
        <header><h2>Network Analysis Commands</h2></header>
        <ul className='key-concept'>
          <li><span>traceroute (Linux/Unix/MacOS) / tracert (Windows):</span> Display the route and transit delay of packets across a network.</li>
          <li><span>tcpdump (Linux/Unix/MacOS) / Wireshark (Windows):</span> Capture and analyze network traffic.</li>
        </ul>
      </div>
      <div>
        <header><h2>Cyber Security Tools</h2></header>
        <ul className='key-concept'>
          <li><span>nmap:</span> Scan networks and hosts for open ports and network services.</li>
          <li><span>Metasploit:</span> A penetration testing framework that simplifies the discovery and exploitation of vulnerabilities.</li>
          <li><span>John the Ripper:</span> A password-cracking tool that automatically detects and cracks multiple password formats.</li>
          <li><span>Wireshark:</span> A network protocol analyzer that captures and analyzes network traffic.</li>
          <li><span>Aircrack-ng:</span> A suite of tools for auditing wireless networks.</li>
        </ul>
      </div>
      <div>
        By familiarizing yourself with these common commands and tools, you’ll have a solid foundation to build upon in your cyber security journey. As you progress, you will encounter more advanced tools and techniques, so keep learning and stay curious!
      </div>
    </div>
  );
}

export default CommonCommands;
