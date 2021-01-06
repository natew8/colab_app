import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../orangeRed.png'
import defaultPic from '../Header/profile_pic_icon/defProfilePic.png'
import './lab.css'
import Waveform from './Waveform/Waveform'

function Lab(props) {
    return (
        <div className='page'>
            <header className='lab-header'>
                <div className='lab-user-info'>
                    <Link to='/user/profile'>
                        <img className={props.profilePic ? 'profile-pic' : 'lab-default-pic'} src={props.profilePic ? props.profilePic : defaultPic} alt='Profile_pic' />
                    </Link>
                    {/* <h2 >
                        {props.username}
                    </h2> */}
                </div>
                <img className='lab-header-logo' src={logo} alt='Logo' />
            </header>
            <Waveform />
        </div>
    )
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    }
}
export default withRouter(connect(mapStateToProps)(Lab))