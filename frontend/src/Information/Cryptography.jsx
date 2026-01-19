import React from 'react';


const Cryptography = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Basics of Cryptography</h1></header>
      <div>
        Cryptography is the science of securing communication and data by converting plain text into unintelligible format (cipher text) and back again (decipher text). It plays a crucial role in ensuring confidentiality, integrity, authentication, and non-repudiation of data in various digital systems.
      </div>
      <div>
        <header><h2>Salting</h2></header>
        <p>
          Salting is a technique used in hashing algorithms to strengthen password security by adding random data to passwords before hashing. Key points include:
        </p>
        <ul className='key-concept'>
          <li><span>Random Data:</span> Unique random data added to each password.</li>
          <li><span>Prevents Rainbow Table Attacks:</span> Makes it harder for attackers to use precomputed tables for password cracking.</li>
          <li><span>Stored with Hash:</span> Salt is stored along with the hash for password verification.</li>
          <li><span>Secure Hashing Algorithms:</span> Used to generate salted hashes (e.g., bcrypt, PBKDF2).</li>
        </ul>
      </div>
      <div>
        <header><h2>Hashing</h2></header>
        <p>
          Hashing converts plain text into a fixed-size string of characters using a hash function. Key characteristics include:
        </p>
        <ul className='key-concept'>
          <li><span>One-Way Function:</span> Cannot be reversed to obtain original input.</li>
          <li><span>Unique Output:</span> Even minor changes in input produce vastly different outputs.</li>
          <li><span>Checksums:</span> Used to verify data integrity (e.g., SHA-256, MD5).</li>
          <li><span>Password Storage:</span> Securely stores passwords in hashed form to protect against unauthorized access.</li>
        </ul>
      </div>
      <div>
        <header><h2>Key Exchange</h2></header>
        <p>
          Key exchange protocols facilitate secure sharing of encryption keys between parties over insecure channels. Key concepts include:
        </p>
        <ul className='key-concept'>
          <li><span>Diffie-Hellman (DH):</span> Enables two parties to establish a shared secret key over an insecure channel.</li>
          <li><span>Public Key Infrastructure (PKI):</span> Manages digital certificates and facilitates secure communication using public-private key pairs.</li>
          <li><span>Encryption Protocols:</span> Utilize key exchange protocols to negotiate session keys (e.g., SSL/TLS).</li>
          <li><span>Perfect Forward Secrecy (PFS):</span> Ensures that session keys are not compromised even if long-term keys are.</li>
        </ul>
      </div>
      <div>
        <header><h2>Public Key Infrastructure (PKI)</h2></header>
        <p>
          PKI is a framework that manages digital certificates and public-private key pairs to secure communication and verify identities. Key components include:
        </p>
        <ul className='key-concept'>
          <li><span>Certificate Authority (CA):</span> Issues digital certificates that bind public keys to entities.</li>
          <li><span>Registration Authority (RA):</span> Verifies identities and manages certificate requests.</li>
          <li><span>Public Key:</span> Shared openly and used for encryption and verifying digital signatures.</li>
          <li><span>Private Key:</span> Kept secret and used for decrypting messages and signing data.</li>
        </ul>
      </div>
      <div>
        <header><h2>Private Key vs Public Key</h2></header>
        <p>
          Private keys and public keys are essential components of asymmetric encryption. Key differences include:
        </p>
        <ul className='key-concept'>
          <li><span>Private Key:</span> Known only to the owner, used for decrypting messages and signing data.</li>
          <li><span>Public Key:</span> Shared openly, used for encrypting messages and verifying digital signatures.</li>
          <li><span>Asymmetric Encryption:</span> Utilizes both keys for secure communication and data integrity.</li>
          <li><span>Key Management:</span> Requires safeguarding private keys and distributing public keys securely.</li>
        </ul>
      </div>
      <div>
        <header><h2>Obfuscation</h2></header>
        <p>
          Obfuscation is the process of making something unclear or unintelligible. In the context of security, it obscures code, data, or communication to prevent reverse engineering or unauthorized access. Techniques include:
        </p>
        <ul className='key-concept'>
          <li><span>Code Obfuscation:</span> Modifies code structure and logic to deter reverse engineering.</li>
          <li><span>Data Obfuscation:</span> Masks sensitive data with random characters or encryption to protect confidentiality.</li>
          <li><span>Network Obfuscation:</span> Hides network traffic patterns or protocols to evade detection.</li>
          <li><span>Anti-analysis Techniques:</span> Thwarts attempts to analyze malware or malicious activities.</li>
        </ul>
      </div>
      <div className="career">
        <header><h2>Career Opportunities</h2></header>
        <ul>
          <li>Cryptographer</li>
          <li>Security Engineer</li>
          <li>Penetration Tester</li>
          <li>Security Consultant</li>
          <li>Encryption Specialist</li>
          <li>PKI Administrator</li>
        </ul>
      </div>
    </div>
  );
}

export default Cryptography;
