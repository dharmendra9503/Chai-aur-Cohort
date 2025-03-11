const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const emptyList = document.querySelector('.empty-list');
let tasks = [];

const getRandomId = function () {
    return Date.now() + Math.random().toString(32).slice(2);
}

const handleStats = () => {
    const totalTask = tasks.length;
    const completedTask = tasks.reduce((count, task) => {
        if (task.completed) count += 1;
        return count;
    }, 0);
    totalTasks.innerText = `Total tasks: ${totalTask}`;
    completedTasks.innerText = `Completed: ${completedTask}`;
}

const checkBoxInputChange = (parent) => {
    const taskId = parent.getAttribute('data-task-id');
    tasks.forEach(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
            parent.classList.toggle('completed', task.completed);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    handleStats();
};

const deleteTask = (parent) => {
    const taskId = parent.getAttribute('data-task-id');
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskList.removeChild(parent);
    handleStats();
    handleDefaultElemet();
};

const handleDefaultElemet = () => {
    if (tasks.length > 0) {
        taskList.removeChild(emptyList);
    } else {
        taskList.appendChild(emptyList);
    }
}

const addNewTaskToDOM = (task) => {
    const ele = document.createElement('li');
    ele.classList.add('task-item');
    ele.setAttribute('data-task-id', task.id);
    ele.classList.toggle('completed', task.completed);

    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.classList.add('complete-checkbox');
    checkBoxElement.id = 'checkBoxInput';
    if (task.completed) checkBoxElement.checked = true;
    checkBoxElement.addEventListener('change', () => {
        checkBoxInputChange(ele);
    })

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.innerText = task.task;

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.id = 'deleteButton';
    deleteButtonElement.classList.add('delete-button');
    deleteButtonElement.innerText = 'Delete';
    deleteButtonElement.addEventListener('click', () => {
        deleteTask(ele);
    })

    ele.appendChild(checkBoxElement);
    ele.appendChild(taskSpan);
    ele.appendChild(deleteButtonElement);

    taskList.insertBefore(ele, taskList.firstChild);
    handleStats();
};

document.addEventListener('DOMContentLoaded', function () {
    tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(addNewTaskToDOM);
    handleDefaultElemet();
});

addButton.addEventListener('click', function () {
    const newTask = {
        id: getRandomId(),
        task: taskInput.value,
        completed: false
    }
    taskInput.value = "";
    addNewTaskToDOM(newTask);
    tasks.unshift(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    handleDefaultElemet();
});