import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import * as task from './tasks/task.js';
import * as project from './projects/project.js';
import * as pages from './pages.js';
require('bootstrap-icons/font/bootstrap-icons.css');

window.addEventListener('load', () => {
    pages.generateHome(1);
    // project.makeCardsP(project.sideArr);
    // task.makeCards(task.arrOfTasks);
})