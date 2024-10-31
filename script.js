const inputbox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container"); // Use querySelector to select by class

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        listContainer.appendChild(li);//append is used to add the contents in the given area
        let span=document.createElement("span");
        span.innerHTML="\u00d7"//it is used to create the cross mark in front of the uncompleted tasks
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();//to update and to save in localStorage
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){//to save the dta we use local storage
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();