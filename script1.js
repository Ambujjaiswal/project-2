const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
  if (inputbox.value.trim() === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Add event listener to the new span element
    span.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      saveData();
    });
  }

  inputbox.value = "";
  saveData();
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();
