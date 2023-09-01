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

    // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
    //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div class="modal-body">
    //         <form>
    //           <div class="mb-3">
    //             <label for="recipient-name" class="col-form-label">Recipient:</label>
    //             <input type="text" class="form-control" id="recipient-name">
    //           </div>
    //           <div class="mb-3">
    //             <label for="message-text" class="col-form-label">Message:</label>
    //             <textarea class="form-control" id="message-text"></textarea>
    //           </div>
    //         </form>
    //       </div>
    //       <div class="modal-footer">
    //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //         <button type="button" class="btn btn-primary">Send message</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

}