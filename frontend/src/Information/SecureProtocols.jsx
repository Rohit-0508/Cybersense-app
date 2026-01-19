import React from 'react';


const SecureProtocols = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Understanding Secure vs Insecure Protocols</h1></header>
      <div>
        In cybersecurity, the choice of protocols plays a crucial role in ensuring the security and integrity of data transmission. Understanding the differences between secure and insecure protocols is essential for implementing robust security measures.
      </div>
      <div>
        <header><h2>FTP vs SFTP</h2></header>
        <p>
          File Transfer Protocol (FTP) and Secure File Transfer Protocol (SFTP) are used for transferring files over a network. Key differences include:
        </p>
        <ul className='key-concept'>
          <li><span>FTP:</span> Insecure, transmits data in plain text, susceptible to eavesdropping.</li>
          <li><span>SFTP:</span> Secure, encrypts data during transmission using SSH (Secure Shell).</li>
          <li><span>Authentication:</span> FTP uses simple username/password, while SFTP uses SSH keys for stronger authentication.</li>
        </ul>
      </div>
      <div>
        <header><h2>SSL vs TLS</h2></header>
        <p>
          Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are cryptographic protocols used to secure communication over networks. Key differences include:
        </p>
        <ul className='key-concept'>
          <li><span>SSL:</span> Deprecated due to vulnerabilities (e.g., POODLE, BEAST).</li>
          <li><span>TLS:</span> Successor to SSL, provides stronger security and encryption algorithms.</li>
          <li><span>Versions:</span> SSL has multiple versions (SSLv2, SSLv3), while TLS has versions (TLS 1.0, 1.1, 1.2, 1.3).</li>
          <li><span>Usage:</span> TLS is widely used for securing HTTPS websites, email communication, and more.</li>
        </ul>
      </div>
      <div>
        <header><h2>SNMP vs SNMPv3</h2></header>
        <p>
          Simple Network Management Protocol (SNMP) and SNMP version 3 (SNMPv3) are used for managing and monitoring network devices. Key differences include:
        </p>
        <ul className='key-concept'>
          <li><span>SNMP:</span> Insecure, uses community strings for authentication, lacks encryption.</li>
          <li><span>SNMPv3:</span> Secure, introduces authentication (MD5, SHA) and encryption (AES) mechanisms.</li>
          <li><span>Security:</span> SNMPv3 addresses vulnerabilities in earlier versions by implementing robust security features.</li>
          <li><span>Deployment:</span> Recommended for environments requiring secure network management.</li>
        </ul>
      </div>
      <div>
        <header><h2>LDAPS</h2></header>
        <p>
          Lightweight Directory Access Protocol (LDAP) with Secure Sockets Layer (SSL) or Transport Layer Security (TLS) provides secure access to directory services. Key points include:
        </p>
        <ul className='key-concept'>
          <li><span>Encryption:</span> Uses SSL/TLS to encrypt LDAP communication.</li>
          <li><span>Authentication:</span> Ensures secure authentication and data integrity.</li>
          <li><span>Usage:</span> Widely used for secure directory access in organizations.</li>
        </ul>
      </div>
      <div>
        <header><h2>SRTP</h2></header>
        <p>
          Secure Real-time Transport Protocol (SRTP) ensures secure transmission of real-time audio and video over IP networks. Key features include:
        </p>
        <ul className='key-concept'>
          <li><span>Encryption:</span> Provides end-to-end encryption of media streams.</li>
          <li><span>Integrity:</span> Ensures data integrity with message authentication codes (MACs).</li>
          <li><span>Usage:</span> Used in VoIP (Voice over IP) and video conferencing applications.</li>
        </ul>
      </div>
      <div>
        <header><h2>IPsec</h2></header>
        <p>
          Internet Protocol Security (IPsec) provides secure communication across IP networks. Key aspects include:
        </p>
        <ul className='key-concept'>
          <li><span>Authentication:</span> Verifies the identity of communicating parties.</li>
          <li><span>Encryption:</span> Encrypts data to ensure confidentiality.</li>
          <li><span>Integrity:</span> Ensures that data has not been altered during transmission.</li>
          <li><span>Usage:</span> Used for VPN (Virtual Private Network) connections and secure data transmission.</li>
        </ul>
      </div>
      <div>
        <header><h2>S/MIME</h2></header>
        <p>
          Secure/Multipurpose Internet Mail Extensions (S/MIME) ensures secure email communication. Key features include:
        </p>
        <ul className='key-concept'>
          <li><span>Encryption:</span> Encrypts email content and attachments.</li>
          <li><span>Authentication:</span> Provides digital signatures to verify sender identity and message integrity.</li>
          <li><span>Interoperability:</span> Supported by major email clients for secure messaging.</li>
        </ul>
      </div>
    </div>
  );
}

export default SecureProtocols;
