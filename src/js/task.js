class Task {
    constructor(id, title, description, dueDate, prority, status = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.prority = prority;
        this.status = status;
    }
}

let ctrTask = 0;

makeCards = arr => {
    let allCards = document.createElement('div');
    for (let task of arr) {



    }
}

generateCard = obj => {
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

    taskCard.classList.add('taskCard', 'd-flex', 'justify-content-between', 'align-items-center', 'slide', `priority${obj.prority}`);
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


function test() {
    let obj = new Task(1, 'title test', 'some description', '30.03', 1);
    console.log(generateCard(obj))
}
/* <div class="taskCard d-flex justify-content-between align-items-center slide priority0">
        <div class="taskInfo d-flex justify-content-between align-items-center noHover">
            <input type="checkbox" name="select" id="">
            <h3 class="title">Title</h3>
            <span class="date">Due Date: 30.03</span>
        </div>
        <div class="taskButtons d-flex justify-content-between align-items-center noHover">
            <i class="bi bi-info-circle" title="Details"></i>
            <i class="bi bi-pencil-square" title="Edit"></i>
            <i class="bi bi-trash" title="Delete"></i>
            <i class="bi bi-check-lg" title="Mark as finished"></i>
        </div>
    </div> */
