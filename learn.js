let tasks = []

let newTaskInput = document.getElementById('newTask');
let newTaskButton = document.getElementById('addTask');
let allTask = document.getElementById('all-task');
//create newTodoItem

let createNewTodoItem = function(newTaskInput) {

    let list = document.createElement('li');
    let listItem = document.createElement('h3');
    let editInput = document.createElement('input');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    listItem.innerText = newTaskInput;
    editInput.type = "text";
    editButton.innerText = "Edit Task";
    editButton.className = "edit-button";
    deleteButton.innerText = "Delete Task";
    deleteButton.className = "delete-button";

    list.appendChild(listItem);
    list.appendChild(editInput)
    list.appendChild(editButton)
    list.appendChild(deleteButton)

}


let addTask = function(newTaskInput) {
    console.log('Just about adding new task');

    createNewTodoItem(newTaskInput);
    allTask.appendChild(list);


}