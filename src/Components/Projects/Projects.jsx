import React, { useRef } from 'react'
import './Projects.scss'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";


const items = [
  {
    id: 1,
    url: "https://ecom-frontend-theta.vercel.app/",

    github: "https://github.com/himanshupatel457/frontend-ecom",
    title: "React JS Ecommerce",
    img: "/Ecom.png",
    description: "This is Ecommerce site, The purpose of this website is to purchase various available product. This product in itself acquire many important features like Authentication, along with reset password mechanism using JWT token, variuos filters to fetch products as per demand, state management through context API, Utilised MoongoDB Atlas for storing data about products and user Information. Itegrated Payment Gateway from Paypal using BrainTree library,,wrote over 40+ Modules with 70+ lines each.Developed well-structured backend using ExpressJS framework and NodeJS Environment, which includes 25+ controller functions, 15+ modules, and more ,Front-end and Backend on Vercel for better accessibility.",
  },
  {
    id: 2,
    url: "https://food-kart.vercel.app/",
    title: " FoodKart - Food Order App ",
    github: "https://github.com/himanshupatel457/FOOD-KART",
    img: "/FoodKart.png",
    description: "As Name suggest, This app serves the purpose of Buying food online from various food venders out there in market, this application is built using MERN stack. This application includes various appealing animations which are impplemented using various third party library like framer-motion,It includes user profile section, admin dashboard panel,For seamless and 24 X 7 working on to implement Payment Gatewaya and google SSO,",
  },
  {
    id: 3,
    url: "https://assignment-hirequotient-gamma.vercel.app/",
    github: "https://github.com/himanshupatel457/assignment-hirequotient",
    title: "Admin Panel App",
    img: "/AdminDashboard.png",
    description: "The project Primarily aims at state management actitivty. Used Redux toolkit to manage various states. Used CSS to animate and add visual effect to the Dashboard.This Project utilises Only ReactJS, basically a Frontend project",
  },
];


const variants = {
  initial: {
      x: -500,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.3,
      }
  }
}



const SectionForProjects = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section ref={ref}>
      <motion.div className='container'  variants={variants} initial="initial" animate="animate" whileInView="animate" >
        <motion.div className='wrapper' variants={variants}>
          <div className='image-container' style={{ y }}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='text-holder' variants={variants}>
            <motion.h2  variants={variants}>
              {item.title}
            </motion.h2>
            <motion.p  variants={variants}>
              {item.description}
            </motion.p>
            <motion.button  variants={variants}><a href={item.url} target="_blank" rel="noopener noreferrer"><SiVercel /> Check it Out</a></motion.button>
            <motion.button  variants={variants}><a href={item.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Github</a></motion.button>
          </motion.div>
        </motion.div>
      </motion.div>      
    </section>
  )
}


const Projects = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],

  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })



  return (
    <div className='Projects' ref={ref}>
      <div className='progress' >
        <h1>Development Work</h1>
        <motion.div style={{ scaleX }} className='progress-bar' >

        </motion.div>
      </div>
      {
        items.map((item) => (
          <SectionForProjects item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default Projects