import { generateCard } from './card.js';
import { generateDetailsModal } from './details.js';
import { generateEditModal } from './edit.js';
class Task {
    constructor(id, title, description, dueDate, prority, status = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = prority;
        this.status = status;
    }
}
let ctrTask = 0;
function newTask(title, description, dueDate, prority, status = false) {
    let obj = new Task(ctrTask, title, description, dueDate, prority, status);
    ctrTask++;
    return obj;
}
let arrOfTasks = [];
arrOfTasks.push(newTask('Test', 'Test description', '2023-09-11', 2, true));
arrOfTasks.push(newTask('Test2', 'Some other description', '2023-09-12', 1, true));
arrOfTasks.push(newTask('Test3', 'This one is incomplete', '2023-09-14', 0));

function deleteModals() {
    let modals = document.querySelectorAll('.modal');
    for (let modal of modals)
        modal.remove();
}
function deleteTask(id) {
    let selected = document.getElementById(`task-${id}`)
    selected.remove();
}

function addEvents(id) {
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
    })
    status.addEventListener('click', (e) => {
        let btnID = e.target.id.replace('card-status-', '');
        task.status = !task.status;
        updateCard(task);
        addEvents(btnID);
    })
    details.addEventListener('click', () => {
        deleteModals();
        detailsModal(task);
    })
}
function makeCards(arr) {
    let allCards = document.createElement('main');
    for (let task of arr)
        allCards.appendChild(generateCard(task));
    document.body.appendChild(allCards);
    let allTasks = document.querySelectorAll('.taskCard');
    for (let task of allTasks)
        addEvents(task.id.replace('task-', ''));
}
function updateCard(obj) {
    let task = document.querySelector(`#task-${obj.id}`);
    task.id = 'task-delete';
    task.parentNode.insertBefore(generateCard(obj), task);
    deleteTask('delete');
}

function detailsModal(task) {
    document.body.appendChild(generateDetailsModal(task));
    modalID = document.querySelector(`#details-modal-${task.id}`);
    let myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
}
function editModal(e, task) {
    let findID = e.srcElement.id.replace('edit-task-', '');
    document.body.appendChild(generateEditModal(task));
    modalID = document.querySelector(`#edit-modal-${findID}`);
    var myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let saveBtn = document.querySelector(`#save-edit-${findID}`);
    saveBtn.addEventListener('click', editSave);
}

function editSave(e, task) {
    let findID = e.srcElement.id.replace('save-edit-', '');
    let e_title = document.querySelector(`#edit-title-${findID}`);
    let e_description = document.querySelector(`#edit-description-${findID}`);
    let e_date = document.querySelector(`#edit-date-${findID}`);
    let e_priority = document.querySelector(`#edit-priority-${findID}`);
    let e_status = document.querySelector(`#edit-status-${findID}`);
    task.title = e_title.value;
    task.description = e_description.value;
    task.dueDate = e_date.value;
    task.priority = e_priority.value;
    task.status = e_status.checked;
}