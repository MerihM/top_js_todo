
function generateDetailsModal(task) {
    let modal = document.createElement('div');
    let m_dialog = document.createElement('div');
    let m_content = document.createElement('div');
    let m_header = document.createElement('div');
    let m_body = document.createElement('div');
    let m_footer = document.createElement('div');
    let close = document.createElement('button');
    let m_close = document.createElement('button');
    let m_edit = document.createElement('button');
    let m_delete = document.createElement('button');
    let m_finish = document.createElement('button');
    let m_title = document.createElement('h2');
    let d_description = document.createElement('p');
    let d_date = document.createElement('p');
    let d_priority = document.createElement('p');
    let d_status = document.createElement('p');
    m_dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    m_content.classList.add('modal-content');
    m_header.classList.add('modal-header');
    m_footer.classList.add('modal-footer');
    m_body.classList.add('modal-body');
    m_title.classList.add('modal-title', 'fs-5');
    m_title.innerText = task.title;
    close.classList.add('btn-close');
    close.type = 'button';
    close.setAttribute('data-bs-dismiss', 'modal');
    close.ariaLabel = 'Close';
    close.setAttribute('data-bs-dismiss', 'modal');
    m_header.appendChild(m_title);
    m_header.appendChild(close);

    d_description.innerText = 'Description: ' + task.description;
    d_date.innerText = 'Due Date: ' + task.dueDate;
    d_priority.innerText = 'Priority: '
    if (task.priority == 0)
        d_priority.innerText += 'High';
    else if (task.priority == 1)
        d_priority.innerText += 'Medium';
    else
        d_priority.innerText += 'Low';
    if (task.status)
        d_status.innerText = 'Status: Complete';
    else
        d_status.innerText = 'Status: Incomplete';
    m_body.appendChild(d_description);
    m_body.appendChild(d_date);
    m_body.appendChild(d_priority);
    m_body.appendChild(d_status);
    m_close.classList.add('btn', 'btn-outline-secondary');
    m_close.type = 'button';
    m_close.setAttribute('data-bs-dismiss', 'modal');
    m_close.innerText = 'Close';
    m_finish.classList.add('btn', 'btn-outline-primary');
    m_finish.type = 'button';
    m_finish.setAttribute('data-bs-dismiss', 'modal');
    if (task.status)
        m_finish.innerText = 'Mark as incomplete';
    else
        m_finish.innerText = 'Mark as complete'
    m_edit.classList.add('btn', 'btn-outline-primary');
    m_edit.type = 'button';
    m_edit.setAttribute('data-bs-dismiss', 'modal');
    m_edit.innerText = 'Edit';
    m_delete.classList.add('btn', 'btn-outline-danger');
    m_delete.type = 'button';
    m_delete.setAttribute('data-bs-dismiss', 'modal');
    m_delete.innerText = 'Delete';
    m_footer.appendChild(m_finish);
    if (!task.status)
        m_footer.appendChild(m_edit);
    m_footer.appendChild(m_delete);
    m_footer.appendChild(m_close);
    m_content.appendChild(m_header);
    m_content.appendChild(m_body);
    m_content.appendChild(m_footer);
    m_dialog.appendChild(m_content);
    modal.classList.add('modal', 'fade');
    modal.id = `details-modal-${task.id}`;
    modal.tabIndex = -1;
    modal.ariaHidden = 'true';
    modal.appendChild(m_dialog);
    return modal;
}