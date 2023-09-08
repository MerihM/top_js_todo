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
function removeObjectWithId(id) {
    let objWithIDIndex = arrOfTasks.findIndex((obj) => obj.id == id)
    if (objWithIDIndex > -1)
        arrOfTasks.splice(objWithIDIndex, 1);
}
function detailsModal(task) {
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
    })
    deleteM.addEventListener('click', (e) => {
        let btnID = e.target.id.replace('details-modal-delete-', '');
        removeObjectWithId(btnID);
        deleteTask(btnID);
    })
}
function editModal(task) {
    deleteModals();
    document.body.appendChild(generateEditModal(task));
    let modalID = document.querySelector(`#edit-modal-${task.id}`);
    var myModal = new bootstrap.Modal(modalID, focus);
    myModal.show();
    let saveBtn = document.querySelector(`#save-edit-${task.id}`);
    saveBtn.addEventListener('click', () => {
        editSave(task)
    });
}
function editSave(task) {
    let findID = task.id;
    let e_title = document.querySelector(`#edit-title-${findID}`);
    let e_description = document.querySelector(`#edit-description-${findID}`);
    let e_date = document.querySelector(`#edit-date-${findID}`);
    let e_priority = document.querySelector(`#edit-priority-${findID}`);
    let e_status = document.querySelector(`#edit-status-${findID}`);
    task.title = e_title.value;
    task.description = e_description.value;
    task.dueDate = e_date.value;
    task.priority = parseInt(e_priority.value);
    task.status = e_status.checked;
    updateCard(task);
    addEvents(task.id);
}