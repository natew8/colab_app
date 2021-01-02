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
    }
}