import axios from 'axios'
import React, { useState, useEffect } from 'react'
import defPic from './dependencies/defProfilePic.png'
import messageIcon from './dependencies/message.png'
import './teamDisplay.css'


function TeamDisplay() {
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/auth/users').then(res => {
            setTeam(res.data)
            setLoading(false)
        })
    }, [])
    const teamMapped = team.map((element, index) => {
        return (
            <div className='team-list-item'>
                <img
                    className={element.profile_pic ? 'team-profile-pic' : 'team-default-pic'}
                    src={element.profile_pic ? element.profile_pic : defPic} />
                <h3 className='team-display-username'>{element.username}</h3>
                {/* <img className='message-icon' src={messageIcon} alt='message' /> */}
            </div>
        )
    })
    return (
        <div className='container-team'>
            <div className='team-list-header'>
                <h1 className='your-team'>Your Team</h1>
                <div className='user-info-line-team'></div>
            </div>
            {loading ? <h4>Finding you teammates</h4> : teamMapped}
        </div>
    )
}

export default TeamDisplay