import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import moon from '../../assets/crescent.png';
import sun from '../../assets/sunny.png';
import { ThemeContext } from '../../ThemeContext';
import { AuthContext } from '../../AuthContext';
import menu from '../../assets/menu.png'
const Navbar = ({toggleSidebar}) => {
    const { logout } = useContext(AuthContext)
    const [clickedButton, setClickedButton] = useState(null);
    const learnButtonRef = useRef(null);
    const aboutButtonRef = useRef(null);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    const handleSidebarToggle = () => {
        setIsActive(!isActive);
        toggleSidebar(); // Pass toggle function to parent component
    };


    useEffect(() => {
        setIsActive(false); // Reset isActive whenever location changes
    }, [location]);



    const handleButtonClick = (button) => {
        if (clickedButton) {
            clickedButton.classList.remove('button-clicked');
        }
        button.classList.add('button-clicked');
        setClickedButton(button);
    };

    useEffect(() => {
        if (location.pathname === '/intro') {
            if (learnButtonRef.current) {
                handleButtonClick(learnButtonRef.current);
            }
        } else if (location.pathname === '/about') {
            if (aboutButtonRef.current) {
                handleButtonClick(aboutButtonRef.current);
            }
        }
    }, [location]);

    return (
        <div className="navbar">
            <div className="navbar-left">
                <button className={`menu-btn ${isActive ? 'active' : ''}`} onClick={handleSidebarToggle}>
                    <img src={menu} alt="" />
                </button>
                <Link to='/intro'><img src={logo} alt="Logo" className='logo'/></Link>
                <Link to='/intro'>

                    <button ref={learnButtonRef} onClick={(e) => handleButtonClick(e.target)}>
                        Learn
                    </button>
                </Link>
                <Link to='/about'>
                    <button ref={aboutButtonRef} onClick={(e) => handleButtonClick(e.target)}>
                        About
                    </button>
                </Link>
            </div>
            <div className="navbar-right">
                <button className='navbar-logout' onClick={logout}>LOG OUT</button>
                <button onClick={toggleTheme}>
                    <img src={theme === 'light' ? moon : sun} alt="Theme Toggle" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
