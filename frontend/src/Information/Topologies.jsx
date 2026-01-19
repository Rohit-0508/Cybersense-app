import React from 'react';

const Topologies = () => {
  return (
    <div className='introduction'>
      <header className='intro-header'><h1>Network Topologies</h1></header>
      <div>
        Network topology refers to the layout or structure of a network, describing how different nodes are connected and communicate with each other. Understanding network topologies is essential for designing, managing, and troubleshooting networks effectively.
      </div>
      <div>
        <header><h2>Common Network Topologies</h2></header>
        <ul className='key-concept'>
          <li><span>Bus Topology:</span> In a bus topology, all devices are connected to a single central cable (the bus). Data is transmitted to all nodes on the network, and the receiving node processes the data intended for it.</li>
          <li><span>Star Topology:</span> A star topology consists of a central hub or switch to which all devices are directly connected. Data travels through the central hub, and communication between devices requires passing through the hub.</li>
          <li><span>Ring Topology:</span> In a ring topology, each device is connected to two other devices, forming a closed loop. Data travels in one direction around the ring until it reaches its destination.</li>
          <li><span>Mesh Topology:</span> A mesh topology connects each device to every other device in the network. It provides redundant paths for data transmission, ensuring high reliability and fault tolerance.</li>
          <li><span>Hybrid Topology:</span> A hybrid topology is a combination of two or more different topologies (e.g., star-bus, star-ring). It allows organizations to customize their network to meet specific requirements.</li>
        </ul>
      </div>
      <div>
        <header><h2>Factors Influencing Topology Selection</h2></header>
        <ul className="importance">
          <li><span>Scalability:</span> The ability of the topology to scale as the network grows in size and complexity.</li>
          <li><span>Cost:</span> Considerations regarding the cost of implementation, maintenance, and expansion of the network.</li>
          <li><span>Performance:</span> How the chosen topology impacts network speed, efficiency, and data transmission.</li>
          <li><span>Reliability:</span> The topology's ability to provide fault tolerance, minimize downtime, and ensure reliable communication.</li>
          <li><span>Security:</span> Factors related to network security, including data confidentiality, integrity, and accessibility.</li>
        </ul>
      </div>
      <div className="career">
        <header><h2>Network Topology in Practice</h2></header>
        <ul>
          <li>Network Administrator</li>
          <li>Network Engineer</li>
          <li>IT Infrastructure Specialist</li>
          <li>Systems Analyst</li>
          <li>Telecommunications Specialist</li>
          <li>Network Security Analyst</li>
        </ul>
      </div>
    </div>
  );
}

export default Topologies;
