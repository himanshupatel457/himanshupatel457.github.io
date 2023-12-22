import React from 'react'
import './LandingPage.scss'
import { IoArrowDownCircle } from "react-icons/io5";
import { motion } from 'framer-motion';


const textVariants = {
    intial: {
        x: -500,
        opacity: 0,
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 3,
            repeat: Infinity,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
};
const sliderVariants = {
    intial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 25,
            repeat :Infinity,
            repeatType:"mirror", 
        }
    }
}

const LandingPage = () => {
    return (
        <div className='landing-page'>

            <div className='wrapper'>
                <motion.div className='text-container' variants={textVariants} initial="intial" animate="animate">
                    <motion.h2 variants={textVariants}>HIMANSHU PATEL</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className='button' variants={textVariants}>
                        <motion.button variants={textVariants} >
                            <a href='#Projects'>Check out recent Task</a>
                        </motion.button>
                        <motion.button variants={textVariants}>
                        <a href='#Contact'>Reach out</a>
                        </motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} animate="scrollButton">
                        <IoArrowDownCircle size={50} />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className='slider-text' variants={sliderVariants} initial="initial" animate="animate" >
                PROGRAMMER
            </motion.div>
            <div className='imageContainer'>
                <img src='person-at-computer.jpg' alt='SDE' />
            </div>
        </div>
    )
}

export default LandingPage