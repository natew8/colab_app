require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
const userCtrl = require('./controllers/users')
const projectCtrl = require('./controllers/projects')

const app = express()
app.use(express.json())


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}))

/* auth endpoints*/
app.post('/api/auth/register', userCtrl.register)
app.post('/api/auth/login', userCtrl.login)
app.get('/api/auth/me', userCtrl.getUser)
app.post('/api/auth/logout', userCtrl.logout)

/*Projects/HomePage*/
app.get('/api/projects/user', projectCtrl.getMyProjects)
app.get('/api/projects', projectCtrl.getProjects)
app.post('/api/projects/create', projectCtrl.createProject)



massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then((dbInstance) => {
    console.log('Db Ready')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})

