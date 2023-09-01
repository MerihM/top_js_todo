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
let newTask = (title, description, dueDate, priority) => {
    obj = new Task(ctrTask, title, description, dueDate, priority)
    ctrTask++;
    return obj;
}

let generateCard = obj => {
    let taskInfo = document.createElement('div');
    let taskButtons = document.createElement('div');
    let check = document.createElement('input');
    let title = document.createElement('h3');
    let dueDate = document.createElement('span');
    let details = document.createElement('i');
    let edit = document.createElement('i');
    let deleteT = document.createElement('i');
    let mark = document.createElement('i');
    let taskCard = document.createElement('div');
    taskCard.classList.add('taskCard', 'd-flex', 'justify-content-between', 'align-items-center', 'slide', `priority${obj.priority}`);
    taskInfo.classList.add('taskInfo', 'd-flex', 'justify-content-between', 'align-items-center');
    taskButtons.classList.add('taskButtons', 'd-flex', 'justify-content-between', 'align-items-center');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', 'select');
    check.setAttribute('id', `check-${obj.id}`);
    title.classList.add('title');
    dueDate.classList.add('date');
    taskCard.id = `task-${obj.id}`;
    title.innerText = `${obj.title}`;
    dueDate.innerText = `Due Date: ${obj.dueDate}`;
    details.classList.add('bi', 'bi-info-circle');
    details.setAttribute('title', 'Details');
    edit.classList.add('bi', 'bi-pencil-square');
    edit.setAttribute('title', 'Edit');
    deleteT.classList.add('bi', 'bi-trash');
    deleteT.setAttribute('title', 'Delete');
    mark.classList.add('bi', 'bi-check-lg');
    mark.setAttribute('title', 'Mark as finished');
    taskInfo.appendChild(check);
    taskInfo.appendChild(title);
    taskInfo.appendChild(dueDate);
    taskButtons.appendChild(details);
    taskButtons.appendChild(edit);
    taskButtons.appendChild(deleteT);
    taskButtons.appendChild(mark);
    taskCard.appendChild(taskInfo);
    taskCard.appendChild(taskButtons);
    return taskCard;
}

let makeCards = arr => {
    let allCards = document.createElement('main');
    for (let task of arr)
        allCards.appendChild(generateCard(task));
    document.body.appendChild(allCards);
}

let editModal = () => {

}

let generateEditModal = task => {
    let modal = document.createElement('div');
    let m_dialog = document.createElement('div');
    let m_content = document.createElement('div');
    let m_header = document.createElement('div');
    let m_body = document.createElement('div');
    let m_footer = document.createElement('div');
    let group1 = document.createElement('div');
    let group2 = document.createElement('div');
    let group3 = document.createElement('div');
    let group4 = document.createElement('div');
    let group5 = document.createElement('div');
    let editTitle = document.createElement('h2');
    let closeModal = document.createElement('button');
    let closeButton = document.createElement('button');
    let saveButton = document.createElement('button');
    let l_title = document.createElement('label');
    let l_description = document.createElement('label');
    let l_date = document.createElement('label');
    let l_priority = document.createElement('label');
    let l_status = document.createElement('label');
    let i_title = document.createElement('input');
    let i_date = document.createElement('input');
    let i_description = document.createElement('textarea');
    let i_status = document.createElement('input');
    let i_priority = document.createElement('select');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let form = document.createElement('form');
    let labels = [l_title, l_date, l_description, l_priority];
    let groups = [group1, group2, group3, group4, group5];
    let inputs = [i_date, i_description, i_title];
    let options = [option1, option2, option3];

    modal.classList.add('modal', 'fade');
    modal.id = `edit-modal-${task.id}`;
    modal.tabIndex = -1;
    modal.ariaHidden = 'true';
    m_dialog.classList.add('modal-dialog');
    m_content.classList.add('modal-content');
    m_header.classList.add('modal-header');
    m_body.classList.add('modal-body');
    m_footer.classList.add('modal-footer');

}