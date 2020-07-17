let tasks = []

//function to addNewTask
function addNewTask() {
    let newTask = document.getElementById('newTask').value;
    let completed = false;

    //check if string is empty else add task to list and refresh
    if (newTask == "") {
        alert('Please enter your task');
    } else {
        //add new task to the list
        tasks.push({ description: newTask, completed });
        console.log(tasks);
        //create element on the browser
        TodoListHTML(newTask);
    }

}

function TodoListHTML(newTask) {
    let container = document.createElement('div');
    container.className = "addedTask";
    let list = document.createElement('li');
    let text = document.createTextNode(newTask);
    list.appendChild(text);
    document.getElementById('list').appendChild(container);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = 'Delete';
    document.getElementById('addedTask').appendChild(deleteButton);

    document.getElementById('newTask').value = "";
}


// console.log(tasks[1].description);

// //delete an exisiting task
// function deleteTask(key) {
//     tasks.splice(key, key);
// }

// deleteTask(1);
// document.write()

// console.log(tasks);