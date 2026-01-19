import React from 'react';

const AuthMethodologies = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Authentication Methodologies</h1></header>
      <div>
        Authentication is the process of verifying the identity of a user or device attempting to access a system or network. Various methodologies ensure secure authentication, each offering unique features and capabilities suited to different environments and security requirements.
      </div>
      <div>
        <header><h2>Kerberos</h2></header>
        <p>
          Kerberos is a network authentication protocol that uses tickets to authenticate clients to services and servers to services. It provides mutual authentication, ensuring both parties verify each other's identity. Key components include:
        </p>
        <ul className='key-concept'>
          <li><span>Tickets:</span> Tokens issued by the Kerberos server to clients for accessing services.</li>
          <li><span>Authentication Server (AS):</span> Verifies the identity of users and issues Ticket Granting Tickets (TGTs).</li>
          <li><span>Ticket Granting Server (TGS):</span> Issues service tickets based on TGTs for accessing specific services.</li>
          <li><span>Realm:</span> A Kerberos administrative domain where users, services, and servers are registered.</li>
        </ul>
      </div>
      <div>
        <header><h2>LDAP (Lightweight Directory Access Protocol)</h2></header>
        <p>
          LDAP is an application protocol for accessing and maintaining directory services over an IP network. It provides a central repository for user authentication data and enables single sign-on (SSO) across multiple applications. Key features include:
        </p>
        <ul className='key-concept'>
          <li><span>Directory Services:</span> Stores user credentials, group memberships, and other directory information.</li>
          <li><span>Single Sign-On (SSO):</span> Allows users to authenticate once and gain access to multiple resources.</li>
          <li><span>Schema:</span> Defines the structure of directory entries and attributes.</li>
          <li><span>LDAP Bind:</span> The process of authenticating and establishing a connection with the LDAP server.</li>
        </ul>
      </div>
      <div>
        <header><h2>Single Sign-On (SSO)</h2></header>
        <p>
          SSO is an authentication process that allows users to access multiple applications or systems with a single set of credentials. It enhances user experience and simplifies identity management across diverse platforms. Key components include:
        </p>
        <ul className='key-concept'>
          <li><span>Identity Provider (IdP):</span> Centralizes authentication and authorization, providing tokens for user sessions.</li>
          <li><span>Service Provider (SP):</span> Consumes SSO tokens to grant access to protected resources without prompting users for credentials.</li>
          <li><span>SAML (Security Assertion Markup Language):</span> A standard protocol for exchanging authentication and authorization data between IdPs and SPs.</li>
          <li><span>OAuth (Open Authorization):</span> A framework for token-based authentication and authorization on the web.</li>
        </ul>
      </div>
      <div>
        <header><h2>Certificates</h2></header>
        <p>
          Certificates are digital documents issued by Certificate Authorities (CAs) to verify the identity of users, devices, or services. They are used for secure communication and authentication in various scenarios:
        </p>
        <ul className='key-concept'>
          <li><span>Public Key Infrastructure (PKI):</span> Manages certificates, CAs, and digital signatures.</li>
          <li><span>X.509 Standard:</span> Defines the format and structure of certificates, including information like issuer, subject, and public key.</li>
          <li><span>SSL/TLS:</span> Protocols that use certificates to secure data transmission over the internet.</li>
          <li><span>Client Certificates:</span> Used by clients to authenticate to servers, ensuring secure access to resources.</li>
        </ul>
      </div>
      <div>
        <header><h2>Local Authentication</h2></header>
        <p>
          Local authentication involves verifying user identities against credentials stored locally on a system or device. It is commonly used for standalone devices or small-scale environments without centralized authentication services.
        </p>
        <ul className='key-concept'>
          <li><span>Password Authentication:</span> Users authenticate using a username and password stored locally.</li>
          <li><span>Biometric Authentication:</span> Uses biometric data (fingerprint, facial recognition) for identity verification.</li>
          <li><span>Token-based Authentication:</span> Uses physical tokens (smart cards, USB tokens) to authenticate users.</li>
          <li><span>Operating System Integration:</span> Integrates with the OS's authentication mechanisms for user access control.</li>
        </ul>
      </div>
      <div>
        <header><h2>RADIUS (Remote Authentication Dial-In User Service)</h2></header>
        <p>
          RADIUS is a client-server protocol that provides centralized authentication, authorization, and accounting management for users connecting to a network. It is widely used in enterprise and service provider networks to authenticate remote users.
        </p>
        <ul className='key-concept'>
          <li><span>Authentication Server:</span> Verifies user credentials and grants access to network resources.</li>
          <li><span>Accounting:</span> Tracks user sessions, including start and end times, data transferred, and service usage.</li>
          <li><span>Authorization:</span> Defines user access rights and permissions based on policies configured on the RADIUS server.</li>
          <li><span>Integration with Network Devices:</span> Supports integration with routers, switches, and VPN concentrators for user authentication.</li>
        </ul>
      </div>
      <div className="career">
        <header><h2>Career Opportunities</h2></header>
        <ul>
          <li>Identity and Access Management (IAM) Specialist</li>
          <li>Security Engineer</li>
          <li>Network Administrator</li>
          <li>Cyber Security Analyst</li>
          <li>Authentication Engineer</li>
          <li>Penetration Tester</li>
        </ul>
      </div>
    </div>
  );
}

export default AuthMethodologies;
