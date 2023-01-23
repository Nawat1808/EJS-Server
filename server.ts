import express, { Request, Response } from 'express'
const date = require(__dirname + '/date.js')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
const port = process.env.PORT
const tasks = new Set()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.render('index', { taskTitle: 'Home', today: today, tasks: todoHome});
})
app.get('/school', (req: Request, res: Response) => {
    res.render('index', { taskTitle: 'School', today: today, tasks: todoSchool });
})

const today = date.getDateNow();
const todoHome = new Set()
const todoSchool = new Set()

console.log(today)

app.post('/', (req: Request, res: Response) => {
    let todoList = todoHome
    let path = '/'
    if (req.body.type === 'School') {
        todoList = todoSchool
        path = 'school'
    }
    let newTask = req.body.newTask
    if (newTask !== '') {
        todoList.add(newTask)
    }
    if (req.body.delete !== undefined) {
        todoList.delete(req.body.delete)
    }
    res.redirect(path)
})


app.listen(port, () => {
    console.log(`⚡️[SERVER]: Server is running at https://localhost:${port}`)
})