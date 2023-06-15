const inputbox=document.getElementById("input-box");
// basically using dom to hold the element 
const listcontainer=document.getElementById("list-container");

function addtask(){

    if(inputbox.value===' ')
    {
        alert("you must write something!");
    }
    else{
        // we are creating an element li 
        let li=document.createElement("li");
        // whi typical tarika of assigning a value to an element
        // basically input box mai jo bhi value daalnge wo li mai store ho jayega  
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        // we need a cross icon after the task 
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    // to clear what is written inside 
    inputbox.value = " ";
    saveData();
}

// javascript for click function
listcontainer.addEventListener("click",function(e){
    if(e.target.tag==="li")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagname === "span")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to store the results
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
      
}

function showtask(){
   listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();



