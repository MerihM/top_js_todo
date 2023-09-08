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
let makeCards = arr => {
    let allCards = document.createElement('main');
    for (let task of arr)
        allCards.appendChild(generateCard(task));
    document.body.appendChild(allCards);
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