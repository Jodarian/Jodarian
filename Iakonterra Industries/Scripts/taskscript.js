const CreateWindowActiveMode = document.getElementById("createmode");
const DesktopOfTaskVisible = document.getElementById("taskdesktop");
const ButtonOfCreateOfTask = document.getElementById("createbutton");
const ButtonOfCancleOfTask = document.getElementById("cancle");
document.addEventListener("DOMContentLoaded", () => {
    const ButtonOfNextCreate = document.getElementById("nextcreate");
    
    if (ButtonOfNextCreate) { 
        ButtonOfNextCreate.addEventListener("click", (event) => {
            event.preventDefault();
            createTask();
           
            
        });
    } else {
        console.error("Кнопка nextcreate не найдена!");
    }
});
ButtonOfCreateOfTask.addEventListener("click", ClickButtonOfCreateTask);
ButtonOfCancleOfTask.addEventListener("click", (event) => {
    event.preventDefault();
    ClickButtonOfCancleTask();
});


function ActivateOFCreateWindow(ActiveOFWindowState) {
    if (ActiveOFWindowState) {
        CreateWindowActiveMode.style.display = "block";
        DesktopOfTaskVisible.style.display = "none";
    } else {
        DesktopOfTaskVisible.style.display = "block";
        CreateWindowActiveMode.style.display = "none";
    }
}

function ClickButtonOfCreateTask() {
    ActivateOFCreateWindow(true);
}

function ClickButtonOfCancleTask() {
    ActivateOFCreateWindow(false);
}

// Класс для создания задач
class Task {
    constructor(title, date, importance, author) {
        this.title = title;
        this.date = date;
        this.importance = importance;
        this.author = author;
    }

    createTaskElement() {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("test");

        const titleElement = document.createElement("h6");
        titleElement.textContent = this.title;

        const dateElement = document.createElement("h6");
        dateElement.textContent = this.date;

        const importanceElement = document.createElement("h6");
        importanceElement.textContent = this.importance;

        const authorElement = document.createElement("h6");
        authorElement.textContent = this.author;

        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", () => {
            taskContainer.remove();
        });

        taskContainer.append(titleElement, dateElement, importanceElement, authorElement, deleteButton);
        return taskContainer;
    }

    addToDOM() {
        document.getElementById("tasks").appendChild(this.createTaskElement());
    }
}


function createTask() {
    const name = document.getElementById("taskName").value;
    const date = document.getElementById("taskDate").value;
    const importance = document.getElementById("importanting").value;
    const fio = document.getElementById("taskFIO").value.trim();

    if (name && date && fio) {
        const newTask = new Task(name, date, importance, fio);
        newTask.addToDOM();

       
        document.getElementById("taskName").value = "";
        document.getElementById("taskDate").value = "";
        document.getElementById("taskFIO").value = "";

        ClickButtonOfCancleTask();
    } 
    else
    {
        const Message = document.createElement("h5");
        Message.value = "No Correct";
        Message.style.color = "red";
        CreateWindowActiveMode.append(Message);
        console.log(Message.value)
        

    }
}

console.log(document.getElementById("taskName"));