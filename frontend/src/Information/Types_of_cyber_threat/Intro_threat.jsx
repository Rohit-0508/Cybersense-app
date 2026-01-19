import React from 'react'
import './Intro_threat.css'
const Intro_threat = () => {
    return (
        <div className='introduction'>
            <header><h1>Types of Cyber Threats</h1></header>
            <div>
                In the simplest sense, a cybersecurity threat, or cyberthreat, is an indication that a hacker or malicious actor is attempting to gain unauthorized access to a network for launching a cyberattack.
                <br /><br />
                Cyberthreats can range from the obvious, such as an email from a foreign potentate offering a small fortune if you’ll provide your bank account number, to the deviously stealthy, such as a line of malicious code that sneaks past cyberdefenses and lives on the network for months or years before triggering a costly data breach. The more security teams and employees know about the different types of cybersecurity threats, the more effectively they can prevent, prepare for and respond to cyberattacks.
            </div>
            <ol style={{paddingBottom:'8pc'}}>
                <h2><li><header className='malware'>Malware</header></li></h2>
                <div>
                    Malware—short for “malicious software”—is software code that is written intentionally to harm a computer system or its users.
                    <br />
                    Almost every modern cyberattack involves some type of malware. Threat actors use malware attacks to gain unauthorized access and render infected systems inoperable, destroying data, stealing sensitive information and even wiping files critical to the operating system.
                    <br /><br />
                    Common types of malware include:

                    <ul className='types'>
                        <li><span>Viruses:</span> Programs that replicate themselves and spread to other files on a computer. They can corrupt or delete data and cause system instability.</li>
                        <li><span>Worms:</span> Self-replicating programs that spread across networks and exploit vulnerabilities to infect other computers.</li>
                        <li><span>Trojans:</span> Malicious programs disguised as legitimate software, often used to steal sensitive information or provide backdoor access to a system.</li>
                        <li><span>Ransomware:</span> Malware that encrypts files or locks users out of their systems, demanding payment (usually in cryptocurrency) for decryption or access.</li>
                        <li><span>Spyware:</span> Software designed to secretly monitor and collect user information, such as keystrokes, browsing habits, and login credentials.</li>
                    </ul>
                </div>
                <header><h2><li>Social Engineering and Phising</li></h2></header>
                <div>
                    Frequently referred to as “human hacking,” social engineering manipulates targets into taking actions that expose confidential information, threaten their own or their organization’s financial well-being or otherwise compromise personal or organizational security.<br /><br />
                    Phishing is the best-known and most pervasive form of social engineering. Phishing uses fraudulent emails, email attachments, text messages or phone calls to trick people into sharing personal data or login credentials, downloading malware, sending money to cybercriminals or taking other actions that might expose them to cybercrimes.
                    <br />
                    <br />
                    Common types of phising include:
                    <ul className='types'>
                        <li><span>Email Phishing:</span> Deceptive emails impersonating legitimate entities, prompting recipients to click malicious links or download attachments containing malware.</li>
                        <li><span>Spear Phishing:</span> Highly targeted emails customized with personalized information to deceive specific individuals into divulging sensitive data or performing actions beneficial to the attacker.</li>
                        <li><span>Whaling:</span> Targeting high-profile individuals within organizations, such as executives, aiming to trick them into authorizing fraudulent transactions or disclosing confidential information.</li>
                        <li><span>Clone Phishing:</span> Creating replicas of legitimate emails with minor modifications, such as replacing links or attachments, to trick recipients into clicking malicious content.</li>
                        <li><span>Vishing:</span> Using phone calls or voice messages to deceive individuals into providing personal information or performing actions through automated or prerecorded messages.</li>
                        <li><span>SMS Phishing (Smishing): </span>Sending deceptive text messages to mobile devices, typically containing urgent requests or fake alerts, to trick recipients into clicking malicious links or disclosing sensitive information.</li>
                        <li><span>Search Engine Phishing:</span> Manipulating search engine results to display deceptive websites or ads mimicking legitimate ones, leading users to enter sensitive information unknowingly.</li>
                    </ul>
                </div>
                <header><h2><li>Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) Attacks: </li></h2></header>
                <div>
                    DoS and DDoS attacks disrupt services and make systems or networks inaccessible to legitimate users by flooding them with an overwhelming volume of traffic or requests. In a DoS attack, the traffic originates from a single source, while in a DDoS attack, multiple compromised devices (botnets) are used to amplify the attack and make it more difficult to mitigate.
                </div>
                <header><h2><li>Insider Threats:</li></h2></header>
                <div>
                    Insider threats involve individuals within an organization, such as employees, contractors, or business partners, who misuse their access privileges to intentionally or unintentionally compromise security. Insider threats can include malicious insiders who intentionally steal data or sabotage systems, as well as negligent insiders who inadvertently expose sensitive information through careless actions.
                </div>
                <header><h2><li>Zero-Day Exploits:</li></h2></header>
                <div>
                    Zero-day exploits target vulnerabilities in software or hardware that are not yet known to the vendor or the public. Attackers exploit these vulnerabilities to gain unauthorized access to systems, execute arbitrary code, or perform other malicious actions before patches or security updates are available. Zero-day exploits pose a significant threat because organizations have no defense against them until a patch is released.
                </div>
                <header><h2><li>Man-in-the-Middle (MitM) Attacks: </li></h2></header>
                <div> MitM attacks occur when an attacker intercepts and alters communication between two parties, often without their knowledge. By positioning themselves between the sender and receiver, the attacker can eavesdrop on sensitive information, manipulate data, or impersonate one of the parties to facilitate fraudulent transactions or gain unauthorized access to systems.</div>
                <br /><br />
                <div>Understanding these types of cyber threats is essential for implementing effective cybersecurity measures and mitigating risks to computer systems, networks, and data. Organizations and individuals should remain vigilant and adopt security best practices to protect against these evolving threats.</div>
            </ol>
        </div>
    )
}

export default Intro_threat