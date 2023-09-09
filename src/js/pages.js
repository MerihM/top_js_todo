import * as bootstrap from 'bootstrap';
import * as task from './tasks/task.js';
import * as project from './projects/project.js';

export function generateHome(index) {
    let select = document.querySelector(`#project-container-${index}`);
    project.makeCardsP(project.sideArr);
    task.makeCards(project.sideArr[index].tasks);
}
export function generateUnfinished() {

}