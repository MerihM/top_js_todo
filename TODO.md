# Main part

## Notes Card

**Display:**
- Note title
- Text
- X button

**Functionality:**
- On click:
  - X button: Deletes note
  - Title/Text: Edits text (as text input with hidden borders)

## Finished

**Display:**
- Number in bubble (number of finished tasks)
**Functionality:**
- On click:
  - Display all finished tasks

## Notes

**Display:**
- Notes
- New note button
**Functionality:**
- On click:
  - Display all notes
  - New note button - Display new note modal


# Data Structure 

### Note Object:
```json
{
    "ID": "id from projectCtr",
    "Title": "title of project",
    "Tasks": "[array of tasks]"
}

``` 

# Modules

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
