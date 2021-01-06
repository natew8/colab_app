module.exports = {
    getMyProjects: async (req, res) => {
        const db = req.app.get('db')
        const myProjects = await db.projects.get_user_projects([req.session.user.id])
        res.status(200).send(myProjects)
    },
    getProjects: async (req, res) => {
        const db = req.app.get('db')
        const otherProjects = await db.projects.get_other_projects([req.session.user.id])
        res.status(200).send(otherProjects)
    },

    getSingleProject: async (req, res) => {
        const db = req.app.get('db')
        const { project_id } = req.params
        const project = await db.projects.get_project([project_id])
        res.status(200).send(project)
    },
    createProject: async (req, res) => {
        const db = req.app.get('db')
        const { project_title, deadline } = req.body
        const { id } = req.session.user
        const date = new Date
        if (id) {
            const newProject = await db.projects.create_project([project_title, deadline, id, date])
            res.status(200).send(newProject)
        } else {
            res.status(403).send('You must Be logged in')
        }
    },

    updateProjectInfo: async (req, res) => {
        const db = req.app.get('db')
        const { project_id, project_creator_id } = req.params
        const { project_title, deadline } = req.body
        const { id } = req.session.user
        if (id !== +project_creator_id) {
            res.status(403).send('You must be the project creator to update project info')
        } else {
            const updateProject = await db.projects.update_project_info([project_id, project_title, deadline])
            res.status(200).send(updateProject)
        }
    },

    deleteProject: async (req, res) => {
        const db = req.app.get('db')
        const { project_id, project_creator_id } = req.params
        const { id } = req.session.user

        if (id !== +project_creator_id) {
            res.status(403).send('You must be the project creator to delete a project.')
        } else {
            const projects = await db.projects.delete_project([project_id])
            res.status(200).send(projects)
        }
    },

    addUsersToProject: async (req, res) => {
        const db = req.app.get('db')
        const { user_id, project_id, project_creator_id } = req.body
        const { id } = req.session.user

        if (id !== project_creator_id) {
            console.log(user_id)
            return res.status(403).send('You must be the project creator to add users to a project.')
        } else {
            const teamProject = await db.projects.add_users_to_project([user_id, project_id])
            res.status(200).send(teamProject)
        }
    },

    removeUserFromProject: async (req, res) => {
        const db = req.app.get('db')
        const { user_id, project_id, project_creator_id } = req.params
        const { id } = req.session.user

        if (id !== +project_creator_id) {
            console.log(user_id, id, project_id, project_creator_id)
            res.status(403).send('You must be the project creator to remove users from a project.')
        } else {
            const teamProject = await db.projects.remove_user_from_project([user_id, project_id])
            res.status(200).send(teamProject)
        }
    },


}