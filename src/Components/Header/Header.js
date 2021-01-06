import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../dux/userReducer'
import logo from '../../orangeRed.png'
import defaultPic from './profile_pic_icon/defProfilePic.png'
import './header.css'
import axios from 'axios'


function Header(props) {
    useEffect(() => {
        axios.get('/api/auth/me').then(res => {
            props.updateUser(res.data)
        })
    }, [])

    return (
        <header className='colab-header'>
            <img className='header-logo' src={logo} alt='Logo' />
            <div className='user-info'>
                <h2 >
                    {props.username}
                </h2>
                <Link to='/user/profile'>
                    <img className={props.profilePic ? 'profile-pic' : 'default-pic'} src={props.profilePic ? props.profilePic : defaultPic} alt='Profile_pic' />
                </Link>
            </div>
        </header >
    )
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    }
}

export default withRouter(connect(mapStateToProps, { updateUser })(Header))