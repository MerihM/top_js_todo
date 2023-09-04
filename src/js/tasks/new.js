function generateForm(newID) {
    let form = document.createElement('form');
    let group1 = document.createElement('div');
    let group2 = document.createElement('div');
    let group3 = document.createElement('div');
    let group4 = document.createElement('div');
    let groups = [group1, group2, group3, group4];
    let l_title = document.createElement('label');
    let l_description = document.createElement('label');
    let l_date = document.createElement('label');
    let l_priority = document.createElement('label');
    let labels = [l_title, l_date, l_description, l_priority];
    let n_title = document.createElement('input');
    let n_description = document.createElement('textarea');
    let n_date = document.createElement('input');
    let n_priority = document.createElement('select');
    let fc = [n_title, n_description, n_date];
    let opt1 = document.createElement('option');
    let opt2 = document.createElement('option');
    let opt3 = document.createElement('option');
    for (let group of groups)
        group.classList.add('mb-3');
    for (let label of labels)
        label.classList.add('form-label');
    for (let f of fc)
        f.classList.add('form-control');
    n_priority.classList.add('form-select', 'form-select-sm');
    l_title.setAttribute('for', `new-title-${newID}`);
    l_title.innerText = 'Title';
    l_description.setAttribute('for', `new-description-${newID}`);
    l_description.innerText = 'Description';
    l_date.setAttribute('for', `new-date-${newID}`);
    l_date.innerText = 'Due Date';
    l_priority.setAttribute('for', `new-priority-${newID}`);
    l_priority.innerText = 'Priority';
    n_title.type = 'text';
    n_title.id = `new-title-${newID}`;
    n_title.setAttribute('placeholder', 'Title...');
    n_description.id = `new-description-${newID}`;
    n_description.setAttribute('placeholder', 'Description of the task...');
    n_date.type = 'date';
    n_date.id = `new-date-${newID}`;
    n_priority.id = `new-priority-${newID}`;
    opt1.innerText = 'Low';
    opt1.value = 2;
    opt2.innerText = 'Medium';
    opt2.value = 1;
    opt3.innerText = 'High';
    opt3.value = 0;
    n_priority.add(opt1);
    n_priority.add(opt2);
    n_priority.add(opt3);
    group1.appendChild(l_title);
    group1.appendChild(n_title);
    group2.appendChild(l_description);
    group2.appendChild(n_description);
    group3.appendChild(l_date);
    group3.appendChild(n_date);
    group4.appendChild(l_priority);
    group4.appendChild(n_priority);
    for (let group of groups)
        form.appendChild(group);
    return form;
}
