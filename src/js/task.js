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