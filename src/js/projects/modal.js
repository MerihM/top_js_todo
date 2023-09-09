function generateForm(newID) {
    let form = document.createElement('form');
    let group = document.createElement('div');
    let l_title = document.createElement('label');
    let n_title = document.createElement('input');
    group.classList.add('mb-3');
    l_title.classList.add('form-label', 'fs-2');
    n_title.classList.add('form-control');
    l_title.setAttribute('for', `new-project-title-${newID}`);
    l_title.innerText = 'Project Title';
    n_title.type = 'text';
    n_title.id = `new-project-title-${newID}`;
    n_title.setAttribute('placeholder', 'Title...');
    group.appendChild(l_title);
    group.appendChild(n_title);
    form.appendChild(group);
    return form;
}
export function generateNewProject(newID) {
    let modal = document.createElement('div');
    let m_dialog = document.createElement('div');
    let m_content = document.createElement('div');
    let m_header = document.createElement('div');
    let m_body = document.createElement('div');
    let m_footer = document.createElement('div');
    let m_title = document.createElement('h2');
    let close = document.createElement('button');
    let m_close = document.createElement('button');
    let m_create = document.createElement('button');
    let m_form = generateForm(newID);
    m_dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    m_body.classList.add('modal-body');
    m_content.classList.add('modal-content');
    m_header.classList.add('modal-header');
    m_footer.classList.add('modal-footer');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('data-bs-backdrop', 'static');
    modal.setAttribute('data-bs-keyboard', 'false');
    modal.tabIndex = -1;
    modal.id = `new-project-modal-${newID}`;
    modal.ariaHidden = 'true';
    m_title.classList.add('modal-title', 'fs-5');
    m_title.id = `modal-title-new-project-${newID}`;
    m_title.innerText = 'New Project';
    close.classList.add('btn-close');
    close.type = 'button';
    close.setAttribute('data-bs-dismiss', 'modal');
    close.ariaLabel = 'Close';
    m_close.type = 'button';
    m_close.classList.add('btn', 'btn-secondary');
    m_close.setAttribute('data-bs-dismiss', 'modal');
    m_close.innerText = 'Close'
    m_create.type = 'button';
    m_create.classList.add('btn', 'btn-primary');
    m_create.id = `create-new-project-${newID}`;
    m_create.innerText = 'Create';
    m_header.appendChild(m_title);
    m_header.appendChild(close);
    m_body.appendChild(m_form);
    m_footer.appendChild(m_close);
    m_footer.appendChild(m_create);
    m_content.appendChild(m_header);
    m_content.appendChild(m_body);
    m_content.appendChild(m_footer);
    m_dialog.appendChild(m_content);
    modal.appendChild(m_dialog);
    return modal;
}
export function generateCard(project, size = 2) {
    let container = document.createElement('div');
    let title = document.createElement('h4');
    let numOfTasks = document.createElement('span');
    container.id = `project-container-${project.id}`;
    numOfTasks.classList.add('badge', 'text-bg-light');
    title.classList.add(`ps-${size}`, 'pt-2', 'fw-light');
    title.innerText = project.title;
    if (project.id == 2) {
        let upper = document.createElement('div');
        let lower = document.createElement('div');
        upper.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'pe-2');
        numOfTasks.id = 'newProject';
        numOfTasks.innerText = '+';
        container.classList.add('d-flex', 'flex-column');
        upper.appendChild(title);
        upper.appendChild(numOfTasks);
        for (let p of project.tasks)
            lower.appendChild(generateCard(p, 4));
        container.appendChild(upper);
        container.appendChild(lower);
        return container;
    }
    container.classList.add('cont');
    container.appendChild(title);
    if (project.tasks.length > 0) {
        numOfTasks.innerText = project.tasks.length;
        container.appendChild(numOfTasks);
    }
    return container;
}