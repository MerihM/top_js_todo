import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import * as task from './tasks/task.js';
import * as project from './projects/project.js';
require('bootstrap-icons/font/bootstrap-icons.css');

window.addEventListener('load', () => {
    project.makeCards(project.sideArr);
    task.makeCards(task.arrOfTasks);
})