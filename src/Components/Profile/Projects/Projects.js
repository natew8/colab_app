import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './projects.css'

function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [noProjects, setNoProjects] = useState(false)
    // const [open, setOpen] = useState(false)

    useEffect(() => {
        axios.get('/api/projects').then(res => {
            setProjects(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const projectsMapped = projects.map((element, index) => {
        return (
            <Link style={{ textDecoration: 'none' }} to={`/user/profile/viewProject/${element.id}/${element.project_title}`}>
                <div key={index} className='project-container'>
                    <h2 className='project-title'>{element.project_title}</h2>
                    <h4>Deadline: {element.deadline}</h4>
                </div >
            </Link>
        )
    })

    return (
        <div className='projects-container'>
            <div className='team-projects-header'>
                <h1 className='team-projects-title'>Team Projects</h1>
                <div className='team-project-line'></div>
            </div>
            {noProjects ? <h1>No team Projects</h1> : null}
            {loading ? <h1>Finding your Team Projects</h1> : projectsMapped}
        </div>
    )
}

export default withRouter(Projects)