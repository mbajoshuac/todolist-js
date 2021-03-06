let tasks = []
let editing_task;

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
    let container = document.createElement('h2');
    container.className = "addedTask";
    let list = document.createElement('li');
    let text = document.createTextNode(newTask);
    list.className = "list-item";
    container.appendChild(text);
    list.appendChild(container);

    let editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.setAttribute('data-index', index)
    editButton.setAttribute('onClick', 'initiate_edit()')
    editButton.innerHTML = 'Edit';
    container.appendChild(editButton);

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


function create_edit_input(input_value) {
    let edit_form_container = document.createElement("div");
    edit_form_container.id = "edit-form";
    let edit_input = document.createElement("input");
    edit_input.className = "edit_input";
    edit_input.id = "edit_input";
    edit_input.value = input_value;
    edit_form_container.appendChild(edit_input);


    let save_button = document.createElement("button");
    save_button.id = "save_button";
    save_button.className = "save_button";
    save_button.textContent = "Save";
    edit_form_container.appendChild(save_button);
    return edit_form_container;
}

function initiate_edit() {
    let e = event.target;
    let index = e.getAttribute("data-index");
    editing_task = tasks[parseInt(index)];
    let edit_form = create_edit_input(editing_task.description);
    e.parentElement.appendChild(edit_form);
    return listen_for_edit();
}

function listen_for_edit() {
    let save_button = document.getElementById("save_button");
    save_button.addEventListener("click", save_it)
}

function save_it() {
    let new_value = document.querySelector("#edit_input").value;
    editing_task.description = new_value;
    return parse_todo();

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