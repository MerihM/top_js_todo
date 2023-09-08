class Task {
    constructor(id, title, description, dueDate, priority, status = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
}

let ctrTask = 0;
function newTask(title, description, dueDate, priority, status = false) {
    let task = new Task(ctrTask, title, description, dueDate, priority, status);
    ctrTask++;
    return task;
}
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