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
        // TodoListHTML(newTask);
        parse_todo()
    }

}

function parse_todo() {
    let alltasks = document.getElementById('all-tasks');
    alltasks.innerHTML = "";
    tasks.forEach((task, index) => {
        TodoListHTML(task.description, index);
    })
}

function TodoListHTML(newTask, index) {
    let container = document.createElement('div');
    container.className = "addedTask";
    let list = document.createElement('li');
    let text = document.createTextNode(newTask);
    container.appendChild(text);
    list.appendChild(container);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.setAttribute('data-index', index)
    deleteButton.setAttribute('onClick', 'initiate_delete()')
    deleteButton.innerHTML = 'Delete';
    container.appendChild(deleteButton);

    document.getElementById('newTask').value = "";

    let alltasks = document.getElementById('all-tasks');
    return alltasks.appendChild(list);
}

function delete_todo(index) {
    tasks.splice(index, 1);
    return parse_todo();
}

function initiate_delete() {
    if (confirm('Delete Item?')) {
        let e = event.target;
        let index = e.getAttribute("data-index");
        return delete_todo(parseInt(index));
    }
    return false;
}