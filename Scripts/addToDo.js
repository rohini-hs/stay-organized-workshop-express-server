let dropdownId = document.getElementById("selectUser");

let catdropdownId = document.getElementById("category");

window.onload = function () {
    myFunction();
    setTimeout("",10000)
    initTodoDropdown();
    initTodoCategory();

     btnAddId = document.getElementById("btnAddnew")
       btnAddId.onclick = AddDetails;
}


function initTodoCategory() {
      
    fetch("http://localhost:8083/api/categories/")
    .then(Response => Response.json())
    .then(data =>
      {
        for(let i=0; i<data.length; i++) 
      {
          //populate the dropdown with valid name
          let theOption = new Option(data[i].name, data[i].id); 
       
          // append the option as a child of (inside) the select element
          catdropdownId.appendChild(theOption);
  
      }
  
     })
     return 1;
  }
  

function initTodoDropdown() {
      
    fetch("http://localhost:8083/api/users/")
    .then(Response => Response.json())
    .then(data =>
      {
        for(let i=0; i<data.length; i++) 
      {
          //populate the dropdown with valid name
          let theOption = new Option(data[i].name, data[i].id); 
       
          // append the option as a child of (inside) the select element
          dropdownId.appendChild(theOption);
  
      }
  
     })
     return 1;
  }
  

function AddDetails(){
 

    //collect all the dat from the form
    let selectID = dropdownId.value;
    let priorityID = document.querySelector('input[name="priority_set"]:checked') 
    let description = document.getElementById("description");
    let deadline = document.getElementById("deadline");
    let priority = priorityID.value;

    description.style.backgroundColor = "white";
    deadline.style.backgroundColor = "white";

    if (description.value != '' && deadline.value != '') {
      let datalog = {
        id: "",
        userid : selectID,
        category : document.getElementById("category").value,
        description :document.getElementById("description").value,
        deadline : document.getElementById("deadline").value,
        priority :priorityID.value,
        completed : ""
      }
        let result = btnAddClicked(datalog);
        console.log(result);
    
   } else {
    if (description.value == ''){
    description.style.backgroundColor = "red"
    }
    if (deadline.value == ''){
    deadline.style.backgroundColor = "red"
    }
      alert("One or more fields are empty");
      return;
  }
  
}

function btnAddClicked(bodyData) {

    //get the name from the select box and its id 
   
    let dropdownId = document.getElementById("selectUser");
    let selectName = dropdownId.name;

    // fetch student #1 (hard-coded) to be updated
   
      fetch("http://localhost:8083/api/todos/", {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            // If the POST finishes successfully, display a message
            // with the newly assigned id
            let message = "Tasks to user is added successfully";
            
            let messageid = document.getElementById("message");
            messageid.innerHTML = message;
        });
}

function myFunction()
{
    const hamburgerMenu = document.querySelector(".hamburger-menu");
            const nav = document.querySelector(".nav");

            hamburgerMenu.addEventListener("click", () => {
                nav.classList.toggle("active")
            });
            
}

