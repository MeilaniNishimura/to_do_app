let tasksEl = document.getElementById('tasks');

let tasks = []

for (let task of tasks) {

    let tasksHTML = `
        <div class="card" id="card-1">
            <div class="card-body">
                <h4 class="card-title">${task.toDoTitle}</h4>
                <p class="card-text"><strong>${task.taskDescription}</strong></p>
            </div>
        </div>
    `
    tasksEl.innerHTML += tasksHTML
    console.log(tasksEl.innerHTML)
}

let formEl = document.getElementById('toDoForm');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    let toDoTitleInput = document.getElementById('toDoTitle');
    let taskDescriptionInput = document.getElementById('taskDescription');
    console.log(toDoTitleInput.value)
    console.log(taskDescriptionInput.value)

    if (toDoTitleInput.value !== '' && taskDescriptionInput.value !== '') {
        let tasksHTML = `
            <div class="card" id="card-1">
                <div class="card-body">
                    <h4 class="card-title">${toDoTitleInput.value}</h4>
                    <p class="card-text"><strong>${taskDescriptionInput.value}</strong></p>
                </div>
            </div>
        `
        tasksEl.innerHTML += tasksHTML

        toDoTitleInput.value = ''
        taskDescriptionInput.value = ''
    }
})

let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', (event) => {
    console.log('Button clicked')
    tasksEl.innerHTML = ''
})