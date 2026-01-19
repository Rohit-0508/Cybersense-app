import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

// Importing all the components for content rendering
import Introduction from '../../Information/Introduction/Introduction';
import Intro_threat from '../../Information/Types_of_cyber_threat/Intro_threat';
import Vulnerability from '../../Information/Common_vulnerability/Vulnerability';
import Connection_types from '../../Information/Connection_types/Connection_types';
import TroubleShooting from '../../Information/TroubleShooting/TroubleShooting';
import ComputerNetworking from '../../Information/ComputerNetworking/ComputerNetworking';
import OperatingSystem from '../../Information/OperatingSystem';
import CommonCommands from '../../Information/CommonCommands';
import CommonProtocols from '../../Information/CommonProtocols';
import VirtualizationTechnologies from '../../Information/Virtualization';
import Topologies from '../../Information/Topologies';
import AuthMethodologies from '../../Information/AuthMethodologies';
import Cryptography from '../../Information/Cryptography';
import SecureProtocols from '../../Information/SecureProtocols';
import UnderstandingFrameworks from '../../Information/UnderstandingFrameworks';
import CommonDistrosForHacking from '../../Information/Distrosforhacking';
import UnderstandingCloudServices from '../../Information/CloudServices';
import UnderstandingCloudEnvironments from '../../Information/CloudEnvironment';
import About from '../About/About';
import ChatPanel from '../../components/ChatPanel/ChatPanel';

const Home = () => {
  const [activeContent, setActiveContent] = useState('introduction'); // Initial content
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to close sidebar and set active content
  const handleSidebarClick = (content) => {
    setActiveContent(content);
    setSidebarOpen(false); // Close sidebar after clicking a link
  };

  // Function to render content based on activeContent state
  const renderContent = () => {
    switch (activeContent) {
      case 'introduction':
        return <Introduction />;
      case 'intro_threat':
        return <Intro_threat />;
      case 'vulnerability':
        return <Vulnerability />;
      case 'connectionTypes':
        return <Connection_types />;
      case 'troubleshooting':
        return <TroubleShooting />;
      case 'computerNetworking':
        return <ComputerNetworking />;
      case 'operatingSystem':
        return <OperatingSystem />;
      case 'commonCommands':
        return <CommonCommands />;
      case 'commonProtocols':
        return <CommonProtocols />;
      case 'virtualization':
        return <VirtualizationTechnologies />;
      case 'topologies':
        return <Topologies />;
      case 'authMethodology':
        return <AuthMethodologies />;
      case 'cryptography':
        return <Cryptography />;
      case 'secureProtocols':
        return <SecureProtocols />;
      case 'frameworks':
        return <UnderstandingFrameworks />;
      case 'hacking':
        return <CommonDistrosForHacking />;
      case 'cloudServices':
        return <UnderstandingCloudServices />;
      case 'cloudEnvironments':
        return <UnderstandingCloudEnvironments />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className='home'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`home-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar setActiveContent={handleSidebarClick} />
        <div className={`content ${sidebarOpen?'blur-background':''} `}  >
          {renderContent()}
          <ChatPanel />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
