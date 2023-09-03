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
    edit.id = `edit-task-${obj.id}`;
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