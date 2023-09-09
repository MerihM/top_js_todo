import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import * as page from './pages.js';
require('bootstrap-icons/font/bootstrap-icons.css');

window.addEventListener('load', () => {
    page.generateHome(0);
    // project.makeCardsP(project.sideArr);
    // task.makeCards(task.arrOfTasks);
})