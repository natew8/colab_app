import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../../orangeScarlet-whiteText.png'
import background from '../../Colab Background 1.png'
import './landing.css'


function Landing() {
    return (
        <motion.div initial={{ background: 'linear-gradient(180deg, #1C6B85 10%, #071013 100%), #F4F6F6' }} className='landing'>
            <div className='welcome-banner'>
                <motion.div initial={{ background: '#0000' }} animate={{ background: 0 }} className='welcome-banner'>
                    <motion.img initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='colab-logo' src={Logo} alt='Logo' />
                    <div className='text-box'>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ delay: .5, duration: 1 }}>
                            Welcome to Colab
                    </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}>
                            Where creatives come together
                    </motion.h2>
                    </div>
                    <Link to='/register'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ delay: 3.5, duration: .5, type: 'tween' }}
                            className='register-button'>
                            Signup
                    </motion.button>
                    </Link>
                    <Link to='/login'><motion.button initial={{ opacity: 0 }} animate={{ scale: 1.2, opacity: 1 }} transition={{ delay: 3.5, duration: .5 }} className='login-button'>Login</motion.button></Link>
                    <motion.img initial={{ height: '0rem' }} animate={{ height: 400 }} transition={{ delay: 3.5, duration: .5, type: 'tween' }} className='landing-background' src={background} alt='background' />
                </motion.div>
            </div>
        </motion.div >
    )
}

export default withRouter(Landing)