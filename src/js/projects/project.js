import { generateNewProject, generateCard } from "./modal.js";
export class Project {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = []
    }
}
export let ctrProjects = 0;
export function newProject(title) {
    let obj = new Project(ctrProjects, title);
    ctrProjects++;
    return obj;
}
let arrOfProjects = [];
let sideArr = []
sideArr.push(newProject('Home'));
sideArr.push(newProject('Unfinished'));
sideArr.push(newProject('Projects'));
sideArr.push(newProject('Notes'));
sideArr[2].tasks = arrOfProjects;
arrOfProjects.push(newProject('Test'));
arrOfProjects.push(newProject('Test 2'));
arrOfProjects.push(newProject('Test 3'));