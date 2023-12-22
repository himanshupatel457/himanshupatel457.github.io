import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';


const variants = {
  initial : {
      x : -500,
      opacity : 0,
  },
  animate:{
      x:0,
      opacity :1,
      transition:{
          duration:1,
          staggerChildren : 0.1,
      }
  }
}
const Skills = () => {
  return (
    <div className='skills'>
      <div className='container'>
        <motion.div className='wrapper' initial="initial" variants={variants} animate="animate">
          <h1>Programming Languages and Skills </h1>
          <motion.div className='overview' variants={variants}>
            <motion.p variants={variants}> 
              C++ laid the foundation for my programming journey, while HTML and CSS transformed me into a web design enthusiast. JavaScript, ReactJS, and Node.js became my tools for crafting dynamic, responsive web applications. MongoDB and ExpressJS deepened my expertise, fostering a comprehensive understanding of full-stack development and data management.
            </motion.p>
          </motion.div>
          <motion.div className='skill-container' variants={variants}>
            <motion.div className='left-corner' variants={variants}>
              <motion.h3 variants={variants}> C++ </motion.h3>
              <motion.h3 variants={variants}> HTML </motion.h3>
              <motion.h3 variants={variants}> CSS </motion.h3>
              <motion.h3 variants={variants}> Javascript </motion.h3>
              <motion.h3 variants={variants}> ReactJs </motion.h3>
              <motion.h3 variants={variants}> MongoDB </motion.h3>
              <motion.h3 variants={variants}> ExpressJS </motion.h3>
              <motion.h3 variants={variants}> NodeJs </motion.h3>
            </motion.div>
            <motion.div className='right-corner' variants={variants}>
              <motion.h3 variants={variants}> Problem Solving </motion.h3>
              <motion.h3 variants={variants}> Creative thinking </motion.h3>
              <motion.h3 variants={variants}> TeamWork </motion.h3>
              <motion.h3 variants={variants}> Time Management </motion.h3>
              <motion.h3 variants={variants}> Communication </motion.h3>
              <motion.h3 variants={variants}> Decisiveness</motion.h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
