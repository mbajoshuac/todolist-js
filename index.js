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

        //Print new task on the browser
        list = document.createElement('li');
        text = document.createTextNode(newTask);
        list.appendChild(text);
        let buttonSpan = document.getElementById('list-btn');
        document.body.insertBefore(list, buttonSpan);
        //let listItem = document.getElementById('addedTask').appendChild(list);

        //create buttons and append to text

        document.getElementById('newTask').value = "";


    }

}




// console.log(tasks[1].description);

// //delete an exisiting task
// function deleteTask(key) {
//     tasks.splice(key, key);
// }

// deleteTask(1);
// document.write()

// console.log(tasks);