# Main part

## Task Card

**Display:**
- Priority strip
- Checkbox
- Title
- Details button
- Due date
- Edit button
- Delete button
- Finish task button

**Functionality:**
- On hover:
  - Priority strip slides and color changes
  - Pop-up modal for additional options
- On button click:
  - Details button: Opens details modal
  - Edit button: Opens edit modal
  - Delete button: Deletes task
  - Finish task button: Marks task as finished
- On checkbox select:
  - Display select all/delete selected section

## Details Modal

**Display:**
- Title
- Project association
- Priority
- Due date
- Finish status
- Details
- Close button
- Edit button (if not finished)
- Delete button
- Finish task button

**Functionality:**
- On button click:
  - Close button: Closes modal
  - Edit button: Opens edit modal (if not finished)
  - Delete button: Deletes task, closes modal
  - Finish task button: Marks task as finished

## Edit Modal

**Display:**
- Title (text input)
- Details (textbox)
- Due date (date input)
- Priority selection (buttons?)
- Save button
- Close button

**Functionality:**
- On button click:
  - Close button: Closes modal
  - Save button: Saves changes, closes modal

## Notes Card

**Display:**
- Note title
- Text
- X button

**Functionality:**
- On click:
  - X button: Deletes note
  - Title/Text: Edits text (as text input with hidden borders)

# Side bar

## All (except Projects)

**Display:**
- Always:
  - Title
  - Number of related tasks bubble
- Selected:
  - Bolded title
- Hover:
  - Slightly darker background

## Home

**Display:**
- Number in bubble (total number of tasks)
**Functionality:**
- On click:
  - Display all tasks with task cards

## Unfinished

**Display:**
- Number in bubble (number of unfinished tasks)
**Functionality:**
- On click:
  - Display all unfinished tasks

## Finished

**Display:**
- Number in bubble (number of finished tasks)
**Functionality:**
- On click:
  - Display all finished tasks

## Projects

**Display:**
- Projects title
- Button for dropdown
- New project button
**Functionality:**
- On click:
  - Show/Hide all projects
  - Dropdown button - Show/Hide all projects
  - New project button - Display new project modal
- When hidden:
  - Display number of projects in bubble

## Each Project

**Display:**
- Number in bubble (number of tasks in the project)
**Functionality:**
- Display tasks related to the project

## Notes

**Display:**
- Notes
- New note button
**Functionality:**
- On click:
  - Display all notes
  - New note button - Display new note modal


# Data Structure 

### Project Object:
```json
{
    "ID": "id from projectCtr",
    "Title": "title of project",
    "Tasks": "[array of tasks]"
}
```
### Note Object:
```json
{
    "ID": "id from projectCtr",
    "Title": "title of project",
    "Tasks": "[array of tasks]"
}

``` 

# Modules

## Task.js

- **Edit task:**
    - Takes an ID as an argument
    - Finds the task by ID
    - Takes title, description, priority, date, and status from the modal as variables
    - Assigns new values to the task
- **Display edit modal:**
    - Calls the `generate edit modal` function
    - Displays the modal
- **Edit modal:**
    - Takes an ID as an argument
    - Finds the task with the given ID value
    - Writes the modal from a Bootstrap template with task values
    - Returns the modal

- **Display new task modal:**
    - Calls the `generate new task modal` function
    - Displays the modal
- **New Task modal:**
    - Writes the modal using a Bootstrap template
    - Returns the modal
    
- **Display details modal:**
    - Calls the `generate details modal` function
    - Displays the modal
- **Details modal:**
    - Takes an ID as an argument
    - Finds the task with the given ID value
    - Writes the modal from a Bootstrap template using task values
    - Returns the modal


## Projects.js

- Class with the structure outlined above
- **New project:**
    - Creates variables with values from the modal
    - Initializes a new project with the variables
    - Returns the project
- **Return projects structure:**
    - Takes an array as an argument
    - Creates a variable `Projects div`
    - Adds classes and text to `Projects div`
    - Iterates through the array
        - Generates a collapsible member
        - Appends the collapsible member to `Projects div`
    - Returns `Projects div`
- **Generate collapsible member:**
    - Takes an object as an argument
    - Creates required variables
    - Adds classes to the variable
    - Adds text based on object values
    - Appends the needed content
    - Returns the final div

## Notes.js

- Class with the structure outlined above
- **New note:**
    - Creates variables with values from the modal
    - Initializes a new note with the variables
    - Returns the note
- **Display notes:**
    - Takes an array as an argument
    - Creates a return div
    - Adds classes to the return div
    - Iterates through the array
        - Generates a note
        - Appends the note to the return div
    - Returns the return div
- **Generate note:**
    - Takes an object as an argument
    - Creates necessary variables
    - Adds classes to variables
    - Adds text to variables
    - Appends the required content
    - Returns the structure

## Page.js

- Imports modules
- **Render mainTasks:**
    - Takes an array as an argument
    - Iterates through the array
        - Calls the display method for the object
    - Appends the content to the body
- **Render mainNotes:**
    - Takes an array as an argument
    - Iterates through the array
        - Calls the display method for the object
    - Appends the content to the body
- **Render side:**
    - Takes an array as an argument
    - Creates a side div
    - Creates paragraphs for home, finished, unfinished, and notes with appropriate classes
    - Appends everything to the side div
    - Calls and appends the `return projects structure` to the side div
    - Appends the side div to the body
- **Clear page:**
    - Deletes everything from the body

## Index.js

- Imports modules
- Creates arrays for projects and notes
- Creates counters for tasks, projects, and notes
- Sets up event listeners for buttons (new task, new project, new note, details, delete, display)
    - Each listener reads the button ID to determine the action
    - For new and delete actions, the ID of the selected item from the side is remembered
    - For new and delete actions, the page is cleared
    - For new and delete actions, the side is re-rendered
    - For new and delete actions, the remembered item is clicked and the main content is re-rendered
