document.getElementById('newTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const task = document.getElementById('taskInput').value;
    if (task) {
        addTask(task);
        document.getElementById('taskInput').value = ''; // Clear input field
    }
});

function addTask(task) {
    // Use AJAX to send a POST request to add_task.php
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_task.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        if (this.status === 200) {
            loadTasks(); // Reload the tasks
        }
    };
    xhr.send("task=" + task);
}

function loadTasks() {
    // Use AJAX to get the tasks from get_tasks.php
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_tasks.php", true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('tasksList').innerHTML = this.responseText;
        }
    };
    xhr.send();
}

// Load tasks on page load
window.onload = function() {
    loadTasks();
};
