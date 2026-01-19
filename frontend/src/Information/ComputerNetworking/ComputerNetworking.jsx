import React from 'react'

const ComputerNetworking = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Basics of Computer Networking</h1></header>
      <div>
        Computer networking refers to the practice of connecting two or more computing devices, creating an infrastructure in which they can exchange data, resources, and software. It is a fundamental part of cyber security and IT skills. In this chapter, we will cover five aspects of computer networking, including networking devices, network types, network protocols, IP addresses, and the OSI model.
      </div>
      <div>
        <header><h2>Networking Devices</h2></header>
        <ul className='key-concept'>
          <li><span>Hubs:</span> Devices that connect different devices together, transmitting data packets to all devices on the network.</li>
          <li><span>Switches:</span> Similar to hubs, but transmit data packets only to specific devices instead of broadcasting to all.</li>
          <li><span>Routers:</span> Devices that direct data packets between networks and provide the best path for data packets to reach their destination.</li>
          <li><span>Firewalls:</span> Devices or software that monitor and filter incoming and outgoing network traffic, allowing only authorized data to pass through.</li>
        </ul>
      </div>
      <div>
        <header><h2>Network Types</h2></header>
        <ul className='key-concept'>
          <li><span>Personal Area Network (PAN):</span> Connects devices within an individual workspace, typically within a range of 10 meters.</li>
          <li><span>Local Area Network (LAN):</span> Covers a small geographical area, such as a home or office, connecting multiple computers and other devices.</li>
          <li><span>Wide Area Network (WAN):</span> Covers a larger geographical area, interconnecting different LANs, often using leased telecommunication lines or wireless links.</li>
          <li><span>Virtual Private Network (VPN):</span> A secure network established over the public internet, encrypting the data transferred and restricting access to authorized users only.</li>
        </ul>
      </div>
      <div>
        <header><h2>Network Protocols</h2></header>
        <ul className='key-concept'>
          <li><span>Transmission Control Protocol (TCP):</span> Ensures the reliable transmission of data and establishes connections between devices.</li>
          <li><span>Internet Protocol (IP):</span> Facilitates the transmission of data packets, assigning unique IP addresses to identify devices.</li>
          <li><span>User Datagram Protocol (UDP):</span> A lightweight, fast, but less reliable protocol compared to TCP, often used for streaming and gaming applications.</li>
        </ul>
      </div>
      <div>
        <header><h2>IP Addresses</h2></header>
        <ul className='importance'>
          <li><span>IPv4:</span> Uses a 32-bit addressing system, allowing for approximately 4.3 billion unique IP addresses.</li>
          <li><span>IPv6:</span> Uses a 128-bit addressing system, providing a significantly larger number of available IP addresses.</li>
          <li>IP addresses can also be categorized as dynamic or static, depending on whether they change over time or remain constant for a device.</li>
        </ul>
      </div>
      <div>
        <header><h2>OSI Model</h2></header>
        <ul className='importance'>
          <li><span>Physical Layer:</span> Deals with the physical connection between devices, including cabling and hardware.</li>
          <li><span>Data Link Layer:</span> Handles the communication between adjacent devices on the same network.</li>
          <li><span>Network Layer:</span> Identifies the best route for data packets and manages IP addresses.</li>
          <li><span>Transport Layer:</span> Ensures the reliable transmission of data, including error checking and flow control.</li>
          <li><span>Session Layer:</span> Establishes, maintains, and terminates connections between applications on different devices.</li>
          <li><span>Presentation Layer:</span> Translates data into a format that is suitable for transmission between devices.</li>
          <li><span>Application Layer:</span> Represents the user interface with which applications interact.</li>
        </ul>
      </div>
      <div>
        Mastering the basics of computer networking is key to understanding and implementing effective cyber security measures. This chapter has covered essential networking concepts, but it is important to continually expand your knowledge in this ever-evolving field.
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'5px',marginTop:'20px'}}>
            <a href="https://tryhackme.com/r/room/whatisnetworking" target='_blank' style={{ color:'#3494f5'}}>What is Computer Networking?</a>
            <a href="https://www.youtube.com/watch?v=iSOfkw_YyOU&t=1549s" target='_blank' style={{ color:'#3494f5'}}>Learn Networking in 3 hours (basics for cybersecurity and DevOps)</a>
        </div>
    </div>
  )
}

export default ComputerNetworking
