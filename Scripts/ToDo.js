let dropdownId = document.getElementById("selectUser");


window.onload = function () {

  initTodoDropdown();
  myFunction();
 
  //get the handle of the button
  btnDetails = document.getElementById("btnDetails");
  btnDetails.onclick = DisplayDetails;

}

function initTodoDropdown() {

  fetch("http://localhost:8083/api/users/")
    .then(Response => Response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        //populate the dropdown with valid name
        let theOption = new Option(data[i].name, data[i].id);

        // append the option as a child of (inside) the select element
        dropdownId.appendChild(theOption);


      }

    })
}



function DisplayDetails() {
  //get the name from the select box and its id 
  let selectName = dropdownId.value;
  let tableId = document.getElementById("table")

  var oRows = tableId.getElementsByTagName('tr');
  var iRowCount = oRows.length;
  
  if (iRowCount > 1) {
    for (let i = 1; i < iRowCount; i++) {
     
      tableId.deleteRow(1);
    }  
  }

  //fetch the details of this user
  fetch("http://localhost:8083/api/todos/byuser/" + selectName)
    .then(Response => Response.json())
    .then(data => {
     
      //Add a dynamic table

      for (let i = 0; i < data.length; i++) {
        let row = tableId.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = data[i].description;
        cell2.innerHTML = data[i].deadline;
        cell3.innerHTML = data[i].category;
        cell4.innerHTML = data[i].priority;
        cell5.innerHTML = data[i].completed;

      }     
    })
}

      function myFunction() {
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        const nav = document.querySelector(".nav");
      
        hamburgerMenu.addEventListener("click", () => {
          nav.classList.toggle("active")
        });
      }

         
        
      
          

      
    