import React from 'react';

const CommonProtocols = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Common Protocols and their Uses</h1></header>
      <div>
        Ports are crucial in networking, as they facilitate communication between devices and applications. They act as endpoints in the networking process, enabling data transfer. We’ve compiled a list of commonly used ports to help you understand their significance in cyber security.
      </div>
      <div>
        <header><h2>Transmission Control Protocol (TCP) Ports</h2></header>
        <ul className='key-concept'>
          <li><span>FTP (File Transfer Protocol) - Ports 20 and 21:</span> FTP is a widely used protocol for transferring files.</li>
          <li><span>SSH (Secure Shell) - Port 22:</span> SSH allows secure communication and remote access to devices over an unsecured network.</li>
          <li><span>Telnet - Port 23:</span> Telnet is a text-based protocol that allows you to interact with remote devices over networks.</li>
          <li><span>SMTP (Simple Mail Transfer Protocol) - Port 25:</span> SMTP is a protocol for sending and receiving emails.</li>
          <li><span>DNS (Domain Name System) - Port 53:</span> DNS translates human-readable domain names into IP addresses to facilitate communication between devices.</li>
          <li><span>HTTP (Hypertext Transfer Protocol) - Port 80:</span> HTTP is the primary protocol used for communication on the World Wide Web.</li>
          <li><span>POP3 (Post Office Protocol 3) - Port 110:</span> POP3 is a protocol for receiving emails from your email server.</li>
          <li><span>IMAP (Internet Message Access Protocol) - Port 143:</span> IMAP is a more advanced email protocol that allows you to access and manage your emails on the email server.</li>
          <li><span>HTTPS (Hypertext Transfer Protocol Secure) - Port 443:</span> HTTPS is an encrypted and secure version of HTTP.</li>
          <li><span>RDP (Remote Desktop Protocol) - Port 3389:</span> RDP is a Microsoft-developed protocol for remotely accessing Windows devices.</li>
        </ul>
      </div>
      <div>
        <header><h2>User Datagram Protocol (UDP) Ports</h2></header>
        <ul className='key-concept'>
          <li><span>DHCP (Dynamic Host Configuration Protocol) - Ports 67 and 68:</span> DHCP is used to allocate IP addresses to devices within a network.</li>
          <li><span>DNS (Domain Name System) - Port 53:</span> DNS performs the same function as in TCP, translating human-readable domain names into IP addresses.</li>
          <li><span>TFTP (Trivial File Transfer Protocol) - Port 69:</span> TFTP is a simplified version of FTP for quick and easy file transfer.</li>
          <li><span>SNMP (Simple Network Management Protocol) - Port 161:</span> SNMP enables monitoring and managing network devices, including printers, routers, and switches.</li>
          <li><span>NTP (Network Time Protocol) - Port 123:</span> NTP is a standard protocol used to synchronize time across network devices.</li>
        </ul>
      </div>
      <div>
        Understanding these common ports and their functions is essential for network administrators and cyber security professionals. Proper knowledge of these ports will help you identify and assess potential security risks, as well as implement robust network defense measures.
      </div>
    </div>
  );
}

export default CommonProtocols;
