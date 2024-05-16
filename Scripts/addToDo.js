let dropdownId = document.getElementById("selectUser");



window.onload = function () {
    myFunction();
    setTimeout("",10000)
    initTodoDropdown();

     btnAddId = document.getElementById("btnAddnew")
       btnAddId.onclick = AddDetails;
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

    let datalog = {
        id: selectID,
        userid : dropdownId.userid,
        category : document.getElementById("category").value,
        description :document.getElementById("description").value,
        deadline : document.getElementById("deadline").value,
       
        priority :priorityID.checked,
        
        completed : ""
    }
    let result = btnAddClicked(datalog);
    console.log(result);
}

function btnAddClicked(bodyData) {

    //get the name from the select box and its id 
   

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
            let message = "Tasks to " + json.name + "is added";
            
            return message
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

