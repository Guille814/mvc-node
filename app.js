const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const homeController = require('./controllers/homeController');
const taskController = require('./controllers/taskController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homeController.getHome);

app.get('/tasks', taskController.getTasks);
app.post('/tasks/add', taskController.addTask);
app.get('/tasks/delete/:index', taskController.deleteTask);

app.listen(3000, () => {
    console.log('Click aquí para abrir en el navegador: http://localhost:3000');
});
