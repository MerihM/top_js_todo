import { generateNewProject, generateCard } from "./modal.js";
import * as task from '../tasks/task.js';
import * as bootstrap from 'bootstrap';
export class Project {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = []
    }
}
export let ctrProjects = 0;
export function newProject(title) {
    let obj = new Project(ctrProjects, title);
    ctrProjects++;
    return obj;
}
export let arrOfProjects = [];
export let sideArr = []
sideArr.push(newProject('Home'));
sideArr.push(newProject('Unfinished'));
sideArr.push(newProject('Projects'));
sideArr.push(newProject('Notes'));
sideArr[2].tasks = arrOfProjects;
sideArr[0].tasks = task.arrOfTasks;
arrOfProjects.push(newProject('Test'));
arrOfProjects.push(newProject('Test 2'));
arrOfProjects.push(newProject('Test 3'));
export function deleteModals() {
    let modals = document.querySelectorAll('.modal');
    for (let modal of modals)
        modal.remove();
}
export function newProjectModal() {
    deleteModals();
    document.body.appendChild(generateNewProject(ctrProjects));
    let modalID = document.querySelector(`#new-project-modal-${ctrProjects}`);
    var myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let btn = document.querySelector(`#create-new-project-${ctrProjects}`);
    btn.addEventListener('click', () => {
        let title = document.querySelector(`#new-project-title-${ctrProjects}`);
        if (title.value != '') {
            arrOfProjects.push(newProject(title.value));
            myModal.hide();
            updateSide();
        }
        else
            alert('Title is required');
    })
}
export function makeCardsP(arr) {
    let allCards = document.createElement('side');
    allCards.classList.add('sd');
    for (let project of arr)
        allCards.appendChild(generateCard(project));
    document.body.appendChild(allCards);
    let btn = document.querySelector('#newProject');
    btn.addEventListener('click', () => {
        newProjectModal();
    })
    let cont = document.querySelectorAll('.cont');
    for (let c of cont) {
        c.addEventListener('click', () => {
            console.log(c.id);
            // add display cards here
        })
    }
}
export function updateSide() {
    let side = document.querySelector('side');
    side.remove();
    makeCardsP(sideArr);
    let side1 = document.querySelector('side');
    let main = document.querySelector('main');
    document.body.insertBefore(side1, main)
}