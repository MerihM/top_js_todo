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