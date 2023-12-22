import React from 'react'
import './Preview.scss'
import { motion } from 'framer-motion';


const sliderVariants = {
    intial: {
        x: 10,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
}
const sliderText = {
    intial: {
        x: "0%",
    },
    animate: {
        x: "-140%",
        transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            // ease: 'ease-in-out',
        }
    }
}
const Preview = () => {
    return (
        <div className='Preview'>
            <motion.div className='slider-text' variants={sliderVariants} initial="initial" animate="animate" >
                <img src="/Ecom.png" alt="First" />
                <img src="/FoodKart.png" alt="Second" />
                <img src='/AdminDashboard.png' alt=''></img>
            </motion.div>
            <div className='motivation' >
                <h1> Code | Play | Repeat</h1>
            </div>
            <motion.div className='quote-text' variants={sliderText} initial="initial" whileInView="animate">
            Make it work, make it right, make it fast
            </motion.div>
        </div>
    )
}

export default Preview