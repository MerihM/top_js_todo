import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import * as test from './tasks/task.js';
require('bootstrap-icons/font/bootstrap-icons.css');

window.addEventListener('load', () => {
    console.log('hello');
    task.makeCards(task.arrOfTasks);
})