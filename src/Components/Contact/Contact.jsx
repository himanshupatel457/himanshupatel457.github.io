import React, { useRef, useState } from 'react'
import './contact.scss';
import { motion } from 'framer-motion'
import { FaArrowAltCircleUp } from "react-icons/fa";
import emailjs from '@emailjs/browser';




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

const Contact = () => {

    const form = useRef();
    const  [err,setErr] = useState(false);
    const  [success,setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                setErr(true);
            });
    };




    return (
        <motion.div className='contact' variants={variants} initial="initial" animate="animate">
            <motion.div className='text-container' variants={variants}>
                <motion.h1 variants={variants}> For Collaboration</motion.h1>
                <motion.div className='item' variants={variants}>
                    <h2>E-Mail</h2>
                    <span>himanshupatel457@gmail.com</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2>Address</h2>
                    <span>Jabalpur, Madhya Pradesh</span>
                </motion.div>
                {/* <motion.div className='item' variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 - OOOOOOOOOO </span>
                </motion.div> */}
            </motion.div>
            <motion.div className='form-container' variants={variants}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='NAME' name="name"/>
                    <input type='email' placeholder='E-MAIL' name="email" />
                    <textarea rows={8} placeholder='MESSAGE' name="message" />
                    <button>
                        Send
                    </button>
                    {err && 'SOMETHING BAD OCCURED'}
                    {success && 'SUCCESS' }
                </form>
            </motion.div>
            <button className='move-up' >
                <a href='#Home'><FaArrowAltCircleUp size={"30px"} /></a>
            </button>
        </motion.div>
    )
}

export default Contact