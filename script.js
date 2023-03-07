const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

document.querySelector('#addTaskBtn').style.backgroundColor = '#145369';
addTaskBtn.style.color = '#ffffff'

    addTaskBtn.addEventListener("click", function () {
        
        if(taskInput.value == ''){
            alert('Veuillez entrer une tache !')
            return;
            
        }

        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "bg-info", "text-white", "d-flex", 'justify-content-around', 'shadow-lg');
        taskItem.innerHTML = ` ${taskInput.value} 
            <button class="btn btn-danger btn-sm float-right change-status">toDo</button>

            <button class="btn btn-warning btn-sm float-right change-status">Doing</button>

            <button class="btn btn-success btn-sm float-right mr-2 change-status mx-3">Done</button>
          `;
          taskList.appendChild(taskItem);
          taskInput.value = "";
    });

    taskList.addEventListener("click", function (event) {

        const taskItem = event.target.parentElement;
        taskItem.classList.remove("bg-info","bg-danger", "bg-warning");

        if (event.target.innerHTML === "toDo") {
            taskItem.classList.add("bg-danger");
        } else if(event.target.innerHTML === "Doing") {
            taskItem.classList.add("bg-warning");
        }else{
            taskItem.classList.add("bg-success");
        }
    });