const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, email, password, role } = req.body

        const [existingUser] = await db.colab_user.find({ email })
        if (existingUser) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.auth.register_user([username, email, hash, role])

        res.status(200).send(req.session.user)

    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const [existingUser] = await db.colab_user.find({ email })
        if (!existingUser) {
            res.status(403).send('User not found')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        if (!isAuthenticated) {
            res.status(403).send('Incorrect Password')
        }

        req.session.user = existingUser
        res.status(200).send(req.session.user)

    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('User not found')
        }
    }
}