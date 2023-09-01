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

    // HEADER 
    editTitle.classList.add('modal-title', 'fs-5');
    editTitle.id = `edit-task-${task.id}`;
    editTitle.innerText = 'Edit';
    closeModal.classList.add('btn-close');
    closeModal.type = 'button';
    closeModal.ariaLabel = 'Close';
    closeModal.setAttribute('data-bs-dismiss', 'modal');

    // BODY
    for (let group of groups)
        group.classList.add('mb-3');
    group5.classList.add('form-check', 'mt-3', 'ms-2');
    for (let label of labels)
        label.classList.add('col-form-label');
    for (let i of inputs)
        i.classList.add('form-control');
    l_title.setAttribute('for', `edit-title-${task.id}`);
    l_title.innerText = 'Title:';
    l_date.setAttribute('for', `edit-date-${task.id}`);
    l_date.innerText = 'Date:';
    l_description.setAttribute('for', `edit-description-${task.id}`);
    l_description.innerText = 'Dascription:';
    l_priority.setAttribute('for', `edit-priority-${task.id}`);
    l_priority.innerText = 'Priority:';
    l_status.classList.add('form-check-label');
    l_status.setAttribute('for', `edit-status-${task.id}`);
    l_status.innerText = 'Finished?';
    i_title.type = 'text';
    i_title.setAttribute('value', `${task.title}`);
    i_title.id = `edit-title-${task.id}`;
    i_date.type = 'date';
    i_date.setAttribute('value', `${task.dueDate}`);
    i_date.id = `edit-date-${task.id}`;
    i_description.value += task.description;
    i_description.id = `edit-description-${task.id}`;
    i_priority.id = `edit-priority-${task.id}`;
    i_priority.classList.add('form-select');
    option1.innerText = 'Low';
    option1.value = 2;
    option2.innerText = 'Medium';
    option2.value = 1;
    option3.innerText = 'High';
    option3.value = 0;
    i_priority.add(option1);
    i_priority.add(option2);
    i_priority.add(option3);
    for (let o of options) {
        if (o.value === task.priority) {
            o.setAttribute('selected', '');
            break;
        }
    }
    i_status.type = 'checkbox';
    i_status.classList.add('form-check-input');
    if (task.status)
        i_status.setAttribute('checked', '');
    i_status.id = `edit-status-${task.id}`;

    // FOOTER

    closeButton.classList.add('btn', 'btn-secondary');
    closeButton.type = 'button';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.innerText = 'Close';
    saveButton.classList.add('btn', 'btn-primary');
    saveButton.type = 'button';
    saveButton.id = `save-edit-${task.id}`;
    saveButton.innerHTML = 'Save';

     //   APPENDING

     m_header.appendChild(editTitle);
     m_header.appendChild(closeModal);
     m_content.appendChild(m_header);
     group1.appendChild(l_title);
     group1.appendChild(i_title);
     form.appendChild(group1);
     group2.appendChild(l_description);
     group2.appendChild(i_description);
     form.appendChild(group2);
     group3.appendChild(l_date);
     group3.appendChild(i_date);
     form.appendChild(group3);
     group4.appendChild(l_priority);
     group4.appendChild(i_priority);
     form.appendChild(i_priority);
     group5.appendChild(l_status);
     group5.appendChild(i_status);
     form.appendChild(group5);
     m_body.appendChild(form);
     m_content.appendChild(m_body);
     m_footer.appendChild(closeButton);
     m_footer.appendChild(saveButton);
     m_content.appendChild(m_footer);
     m_dialog.appendChild(m_content);
     modal.appendChild(m_dialog);
     return modal;

}