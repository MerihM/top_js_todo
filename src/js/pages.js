import { generateCard } from './tasks/card.js';
import { generateDetailsModal } from './tasks/details.js';
import { generateEditModal } from './tasks/edit.js';
import * as bootstrap from 'bootstrap';
import { generateNewModal } from './tasks/new.js';
export class Task {
    constructor(id, title, description, dueDate, prority, status = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = prority;
        this.status = status;
    }
}
export let ctrTask = 0;
export function newTask(title, description, dueDate, prority, status = false) {
    let obj = new Task(ctrTask, title, description, dueDate, prority, status);
    ctrTask++;
    return obj;
}
export let arrOfTasks = [];
arrOfTasks.push(newTask('Test', 'Test description', '2023-09-11', 2, true));
arrOfTasks.push(newTask('Test2', 'Some other description', '2023-09-12', 1, true));
arrOfTasks.push(newTask('Test3', 'This one is incomplete', '2023-09-14', 0));
let unifinished = arrOfTasks.filter((t) => !t.status);

export function deleteModals() {
    let modals = document.querySelectorAll('.modal');
    for (let modal of modals)
        modal.remove();
}
export function deleteTask(id) {
    let selected = document.getElementById(`task-${id}`)
    selected.remove();
    // update();
}
export function addEvents(id) {
    let deleteBtn = document.getElementById(`card-delete-${id}`);
    let status = document.getElementById(`card-status-${id}`);
    let details = document.getElementById(`card-details-${id}`);
    let taskIndex = arrOfTasks.findIndex((obj) => obj.id == id)
    let task = arrOfTasks[taskIndex];
    if (!task.status) {
        let edit = document.getElementById(`card-edit-${id}`);
        edit.addEventListener('click', () => {
            deleteModals();
            editModal(task);
        })
    }
    deleteBtn.addEventListener('click', (e) => {
        let btnID = e.target.id.replace('card-delete-', '');
        removeObjectWithId(btnID);
        deleteTask(btnID);
        update();
    })
    status.addEventListener('click', (e) => {
        task.status = !task.status;
        updateCard(task);
        let btnID = e.target.id.replace('card-status-', '');
        addEvents(btnID);
        update();
    })
    details.addEventListener('click', () => {
        deleteModals();
        detailsModal(task);
    })
}
export function makeCards(arr) {
    let allCards = document.createElement('main');
    for (let task of arr)
        allCards.appendChild(generateCard(task));
    document.body.appendChild(allCards);
    let allTasks = document.querySelectorAll('.taskCard');
    for (let task of allTasks)
        addEvents(task.id.replace('task-', ''));
}
export function updateCard(obj) {
    let task = document.querySelector(`#task-${obj.id}`);
    task.id = 'task-delete';
    task.parentNode.insertBefore(generateCard(obj), task);
    deleteTask('delete');
}
export function removeObjectWithId(id) {
    let objWithIDIndex = arrOfTasks.findIndex((obj) => obj.id == id)
    if (objWithIDIndex > -1)
        arrOfTasks.splice(objWithIDIndex, 1);
}
export function detailsModal(task) {
    deleteModals();
    document.body.appendChild(generateDetailsModal(task));
    let modalID = document.querySelector(`#details-modal-${task.id}`);
    let myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let status = document.querySelector(`#details-modal-status-${task.id}`);
    let deleteM = document.querySelector(`#details-modal-delete-${task.id}`);
    if (!task.status) {
        let edit = document.querySelector(`#details-modal-edit-${task.id}`);
        edit.addEventListener('click', () => {
            editModal(task);
        })

    }
    status.addEventListener('click', () => {
        task.status = !task.status;
        updateCard(task);
        addEvents(task.id);
        update();
    })
    deleteM.addEventListener('click', (e) => {
        let btnID = e.target.id.replace('details-modal-delete-', '');
        removeObjectWithId(btnID);
        deleteTask(btnID);
        update();
    })
}
export function editModal(task) {
    deleteModals();
    document.body.appendChild(generateEditModal(task));
    let modalID = document.querySelector(`#edit-modal-${task.id}`);
    var myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let saveBtn = document.querySelector(`#save-edit-${task.id}`);
    saveBtn.addEventListener('click', () => {
        editSave(task, myModal);
        update();
    });
}
export function editSave(task, modal) {
    let findID = task.id;
    let e_title = document.querySelector(`#edit-title-${findID}`);
    let e_description = document.querySelector(`#edit-description-${findID}`);
    let e_date = document.querySelector(`#edit-date-${findID}`);
    let e_priority = document.querySelector(`#edit-priority-${findID}`);
    let e_status = document.querySelector(`#edit-status-${findID}`);
    let requiredData = ((e_title.value != '') && (e_date.value != ''))
    if (requiredData) {
        task.title = e_title.value;
        task.description = e_description.value;
        task.dueDate = e_date.value;
        task.priority = parseInt(e_priority.value);
        task.status = e_status.checked;
        updateCard(task);
        addEvents(task.id);
        modal.hide();
    }
    else {
        if (e_title.value == '' && e_date.value == '')
            alert('Title and Date are required');
        else if (e_title.value == '')
            alert('Title is required');
        else
            alert('Date is required');
    }
}
export function newModal() {
    deleteModals();
    document.body.appendChild(generateNewModal(ctrTask));
    let modalID = document.querySelector(`#new-modal-${ctrTask}`);
    let myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let saveBtn = document.querySelector(`#create-new-task-${ctrTask}`);
    saveBtn.addEventListener('click', () => {
        let title = document.querySelector(`#new-title-${ctrTask}`);
        let description = document.querySelector(`#new-description-${ctrTask}`);
        let date = document.querySelector(`#new-date-${ctrTask}`);
        let priority = document.querySelector(`#new-priority-${ctrTask}`);
        let requiredData = ((title.value != '') && (date.value != ''));
        if (requiredData) {
            addNewTask(title.value, description.value, date.value, priority.value);
            myModal.hide();
            update();
        }
        else {
            if (title.value == '' && date.value == '')
                alert('Title and Date are required');
            else if (title.value == '')
                alert('Title is required');
            else
                alert('Date is required');
        }
    })
}
export function addNewTask(title, description, dueDate, priority) {
    arrOfTasks.push(newTask(title, description, dueDate, priority));
    let main = document.querySelector('main');
    let task = arrOfTasks[arrOfTasks.length - 1];
    main.appendChild(generateCard(task));
    addEvents(task.id);
}



import { generateNewProject, generateCardP } from "./projects/modal.js";
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
sideArr[0].tasks = arrOfTasks;
sideArr[1].tasks = unifinished;
arrOfProjects.push(newProject('Test'));
arrOfProjects.push(newProject('Test 2'));
arrOfProjects.push(newProject('Test 3'));
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
            update();
        }
        else
            alert('Title is required');
    })
}
export function makeCardsP(arr) {
    let allCards = document.createElement('side');
    allCards.classList.add('sd');
    for (let project of arr)
        allCards.appendChild(generateCardP(project));
    document.body.appendChild(allCards);
    let btn = document.querySelector('#newProject');
    btn.addEventListener('click', () => {
        newProjectModal();
    })
    let cont = document.querySelectorAll('.cont');
    for (let c of cont) {
        c.addEventListener('click', () => {
            let tempID = c.id.replace('project-container-', '');
            let sel = document.querySelector('.selected');
            sel.classList.remove('selected');
            c.classList.add('selected');
            if (parseInt(tempID) > 3) {
                let filt = arrOfProjects.filter((p) => p.id == tempID);
                update(filt[0])
            }
            else {
                update();
            }
        })
    }
}
export function generateHome(index, arr = sideArr) {
    if (arr == sideArr) {
        arr = arr[index]
    }
    document.body.innerHTML = '';
    makeCardsP(sideArr);
    makeCards(arr.tasks);
    let select = document.querySelector(`#project-container-${index}`);
    select.classList.add('selected');
}
export function update(arr = sideArr) {
    unifinished = arrOfTasks.filter((t) => !t.status);
    sideArr[1].tasks = unifinished;
    let select = document.querySelector('.selected');
    let selID = select.id.replace('project-container-', '');
    generateHome(parseInt(selID), arr);
}
