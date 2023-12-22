import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'


const variants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.4,
        }
    }
}

const sliderVariants = {
    intial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            // opacity:0.5
        },
    }
}




const About = () => {
    return (
        <div className='About'>
            <motion.div className='container' initial="initial" variants={variants} whileInView="animate">
                <motion.div className='wrapper' variants={variants}>
                    <motion.div className='Introduction' variants={variants}>
                        <motion.h3 variants={variants}> Hi there !, My Name is <span> Himanshu Patel </span>. I am from Jabalpur, Madhya Pradesh and  pursuing <span>  Electronics and Communication Enginnering aka ECE</span> from  <span>PDPM IIITDM Jabalpur.</span></motion.h3>
                        <motion.h4 variants={variants}>I am a web developer, I like tweaking and playing with development technolgy. I developement keen interest in
                            software domain and also started taking steps to improve my skills in this domain. I learned and developed few web apps which I have described here.
                        </motion.h4>
                        <motion.h1 variants={variants}> I am proficient in subjects like : <span>Data Structures and Algorithm</span>,<span>Object Oriented Programming</span>, <span>DBMS and Operating System</span></motion.h1>
                    </motion.div>
                    <motion.div className='slider-text' variants={sliderVariants} initial="initial" animate="animate">
                        
                        <img src="/col2.jpg" alt="Second" />
                        <img src='/col4.jpg' alt=''></img>
                        <img src='/col5.jpg' alt=''></img>
                        <img src='/col6.jpg' alt=''></img>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About