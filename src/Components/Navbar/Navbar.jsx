import React from 'react'
import './Navbar.scss'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaGoogleDrive } from "react-icons/fa";
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar/>
            <div className='wrapper'>
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{opacity:1,scale:1}} transition={{duration : 0.6}}>W E L C O M E </motion.span>
                <div className='social-sites'>
                    <a href='https://www.instagram.com/himanshupatel457/' target='_blank' rel='noopener noreferrer'><FaInstagramSquare className='social-icons' /></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare className='social-icons' /></a>
                    <a href='https://drive.google.com/file/d/1Tic3U4a597svx0E4rz8N-fP7MQ-4Lm0i/view?usp=sharing' target='_blank' rel='noopener noreferrer'> <FaGoogleDrive className='social-icons'/></a>
                    <a href='https://www.linkedin.com/in/himanshu-patel-iiitdmj/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='social-icons' /></a>
                    <a href='https://github.com/himanshupatel457' target='_blank' rel='noopener noreferrer'><FaGithubSquare className='social-icons' /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar