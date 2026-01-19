import React from 'react';


const UnderstandingFrameworks = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Understanding Frameworks in Cybersecurity</h1></header>
      <div>
        In cybersecurity, frameworks provide structured methodologies and models that help organizations and professionals understand, analyze, and respond to cyber threats effectively. Here, we explore three important frameworks: ATT&CK, Kill Chain, and Diamond Model.
      </div>
      <div>
        <header><h2>ATT&CK Framework</h2></header>
        <p>
          The ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) framework is developed and maintained by MITRE Corporation. It provides a comprehensive knowledge base of tactics and techniques used by adversaries during cyber attacks. Key aspects include:
        </p>
        <ul className='key-concept'>
          <li><span>Tactics:</span> High-level objectives of adversaries, such as initial access, execution, persistence, and exfiltration.</li>
          <li><span>Techniques:</span> Specific methods and procedures used to achieve each tactic, such as spear phishing, privilege escalation, and command and control.</li>
          <li><span>Use:</span> Used for threat intelligence, red teaming, and developing defensive strategies.</li>
          <li><span>Updates:</span> Continuously updated with new tactics and techniques observed in real-world cyber incidents.</li>
        </ul>
      </div>
      <div>
        <header><h2>Kill Chain Model</h2></header>
        <p>
          The Kill Chain model, originally developed by Lockheed Martin, describes the stages of a cyber attack from initial reconnaissance to achieving the attacker’s objectives. Key stages include:
        </p>
        <ul className='key-concept'>
          <li><span>Reconnaissance:</span> Gathering information about the target, such as identifying vulnerabilities and potential entry points.</li>
          <li><span>Weaponization:</span> Developing or acquiring tools and methods for launching the attack.</li>
          <li><span>Delivery:</span> Transmitting malicious payloads to the target, often via phishing emails or compromised websites.</li>
          <li><span>Exploitation:</span> Exploiting vulnerabilities to gain access and establish a foothold in the target system.</li>
          <li><span>Installation:</span> Installing malware or backdoors to maintain persistence and control over the compromised system.</li>
          <li><span>Command and Control:</span> Establishing communication channels between the attacker and compromised systems.</li>
          <li><span>Actions:</span> Executing the intended actions, such as data exfiltration, privilege escalation, or disrupting operations.</li>
          <li><span>Objectives:</span> Achieving the attacker's goals, which may include financial gain, espionage, or sabotage.</li>
        </ul>
      </div>
      <div>
        <header><h2>Diamond Model</h2></header>
        <p>
          The Diamond Model of Intrusion Analysis provides a structured approach to analyzing cyber threats and incidents. It focuses on four key elements:
        </p>
        <ul className='key-concept'>
          <li><span>Adversary:</span> The threat actor or group behind the attack, including their capabilities, motivations, and tactics.</li>
          <li><span>Infrastructure:</span> The tools, infrastructure, and resources used by the adversary, such as command and control servers, malware, and communication channels.</li>
          <li><span>Capabilities:</span> The specific techniques and procedures (TTPs) employed by the adversary during different stages of the attack.</li>
          <li><span>Victim:</span> The target of the attack, including the affected systems, networks, and data.</li>
          <li><span>Use:</span> Used for threat intelligence analysis, incident response, and understanding the broader context of cyber threats.</li>
        </ul>
      </div>
    </div>
  );
}

export default UnderstandingFrameworks;
