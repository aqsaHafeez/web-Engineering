const btn = document.getElementById("btn")
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
      alert("Please enter task!");
      return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);
    taskInput.value = "";
  }
  btn.onclick = addTask
  