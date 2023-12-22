import React, { useState } from 'react';
import './Sidebar.scss';
import Links from './Links/Links';
import Toggler from './Buttons/Toggler';
import { motion } from 'framer-motion';


const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                delay:0.2,
                type: 'spring',
                stiffness: 400,
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            }
        }

    }

    return (
        <motion.div className='sidebar' animate={toggle ? 'open' : 'closed'}>
            <motion.div className='bg' variants={variants}>
                <Links />
            </motion.div>
            <Toggler setToggle={setToggle} />
        </motion.div>
    )
}

export default Sidebar