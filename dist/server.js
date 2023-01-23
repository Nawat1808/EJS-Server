"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const date = require(__dirname + '/date.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const tasks = new Set();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.render('index', { taskTitle: 'Home', today: today, tasks: todoHome });
});
app.get('/school', (req, res) => {
    res.render('index', { taskTitle: 'School', today: today, tasks: todoSchool });
});
const today = date.getDateNow();
const todoHome = new Set();
const todoSchool = new Set();
console.log(today);
app.post('/', (req, res) => {
    let todoList = todoHome;
    let path = '/';
    if (req.body.type === 'School') {
        todoList = todoSchool;
        path = 'school';
    }
    let newTask = req.body.newTask;
    if (newTask !== '') {
        todoList.add(newTask);
    }
    if (req.body.delete !== undefined) {
        todoList.delete(req.body.delete);
    }
    res.redirect(path);
});
app.listen(port, () => {
    console.log(`⚡️[SERVER]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map