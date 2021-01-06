import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './project.css'
import { Link, withRouter } from 'react-router-dom'
import backArrow from './dependencies/backArrow.png'

function Project(props) {
    const [projectInfo, setProjectInfo] = useState({})
    const [deadline, setDeadline] = useState('')
    const [creator, setCreator] = useState('')
    const [created, setCreated] = useState('')
    const [songs, setSongs] = useState([])

    useEffect(() => {
        axios.get(`/api/projects/project/${props.match.params.id}`).then(res => {
            setProjectInfo(res.data)
            setDeadline(res.data[0].deadline)
            setCreator(res.data[0].project_creator)
            setCreated(res.data[0].created)
            axios.get(`/api/project/songList/${props.match.params.id}`).then(res => {
                setSongs(res.data)
            })
        })
    }, [])

    function goBack() {
        props.history.goBack()
    }
    // console.log(projectInfo)
    // console.log(deadline)
    // console.log(creator)
    // console.log(created.toString())

    const mappedSongs = songs.map((element, index) => {
        return (
            <Link style={{ textDecoration: 'none' }} to={`/user/profile/Lab/${element.id}`}>
                <div key={index} className='song-container'>
                    <div className='title-artist-container'>
                        <h2 className='project-title'>{element.song_title}</h2>
                        <h2 className='artist-name'>{element.artist_name}</h2>
                    </div>
                    <h3>{element.status}</h3>
                </div >
            </Link>
        )
    })


    return (
        <div className='project-details-container'>
            <img onClick={() => goBack()} className='back-arrow-project' src={backArrow} alt='back' />
            <h1 className='single-title'>{props.match.params.project_title}</h1>
            <div className='team-project-line'></div>
            <div className='project-details-header'>
                {/* <h2 className='details-header-item'>Project Creator:{creator}</h2> */}
                <h2 className='details-header-item'>Project Creator: Blah</h2>
                <div className='barrier-line'></div>
                {/* <h2 className='details-header-item'>Deadline:{deadline}</h2> */}
                <h2 className='details-header-item'>Deadline: 02/29/00</h2>
                <div className='barrier-line'></div>
                {/* <h2 className='details-header-item'>Created On:{created}</h2> */}
                <h2 className='details-header-item'>Created On: 04/28/2020 </h2>
            </div>
            { mappedSongs}
        </div >
    )
}

export default withRouter(Project)