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