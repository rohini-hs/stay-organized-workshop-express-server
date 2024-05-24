let dropdownId = document.getElementById("selectUser");
let tableelement = document.getElementById("table");
let containerTable = document.getElementById("containerTable");
let buttondetails = document.getElementById("btnModal");


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
     
      //check if the data has more number of rows and then diplay table
      if (data.length>1){
        tableelement.style.visibility = "visible";
        containerTable.style.visibility = "visible";
      }
      
      
      //Add a dynamic table
      if (data.length==0){
        alert("No records found!")
      }

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

        if (data[i].priority == 'High'){
          
          cell4.innerHTML = '<i class="bi bi-thermometer-high h4" style = "color:red;"></i>'
         
        }
         else if (data[i].priority == 'Medium'){
          
          cell4.innerHTML = '<i class="bi bi-thermometer-half h4" style = "color:yellow;"></i>'
         
        }if (data[i].priority == 'Low'){
          
          cell4.innerHTML = '<i class="bi bi-thermometer-low h4" style = "color:green;"></i>'
         
        }


        if (data[i].completed == 'true' || data[i].completed == 1){
          
          cell5.innerHTML = '<i "bi bi-check-circle h4" style = "color:green;"></i>'
         
        }
        else if (data[i].completed == 'false' || data[i].completed == 0)
        {
        cell5.innerHTML = '<i class="bi bi-x-circle h4" style = "color:red" ></i>'
        }

        // Insert a link to details
        const detailsCell = row.insertCell();
        let btnDetailsnew = document.createElement('button');
        btnDetailsnew.className='gfgselect bg-secondary'  ;
        btnDetailsnew.style.backgroundColor = 'transparent';
        btnDetailsnew.style.color = 'blue';
        btnDetailsnew.style.borderColor = 'transparent';
        btnDetailsnew.id = 'btnModal';
        btnDetailsnew.innerText = 'Details';  
        btnDetailsnew.onclick = handleButtonClick;
        detailsCell.appendChild(btnDetailsnew);

        // Insert a edit button 
       /* const editCell = row.insertCell();
        let btnEdit = document.createElement('button');
        btnEdit.className='editClass'  ;
        btnEdit.style.backgroundColor = 'transparent';
        btnEdit.style.color = 'blue';
        btnEdit.style.borderColor = 'transparent';
        btnEdit.id = 'btnEditId';
        btnEdit.innerText = 'Edit';  
        btnEdit.onclick = handleButtonEdit;
        editCell.appendChild(btnEdit);*/

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


      //Function to show detail  list

 function handleButtonClick() {

 // Accessing row data using the data-* attributes
  //const deadliname = this.parentNode.parentNode.firstElementChild.innerText;
  //const deadliname = this.parentNode.parentNode.childNodes.length;
  
    var dsc = this.parentNode.parentNode.childNodes[0].innerText;
    var endl = this.parentNode.parentNode.childNodes[1].innerText;
    var catgy = this.parentNode.parentNode.childNodes[2].innerText;
   

  var exampleModal = getExampleModal();

  // Init the modal if it hasn't been already.
  if (!exampleModal) { exampleModal = initExampleModal(); }

  var html =
      '<div class="modal-header" style="background-color: black;">' +
        '<h5 class="modal-title" id="exampleModalLabel" style="color:white;" >Task Details</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
      '<div class="modal-body" style="background-color:rgb(158, 198, 233);">' +
      '<ul>'+ '<li> Description: ' + dsc + '</li>' + '</br>' + '<li> Deadline: '+ endl + '</li>' + '</br>' + '<li> Category: '+ catgy + '</li> ' +'</br>' + 
       
      '</div>' +
      '<div class="modal-footer" style="background-color:rgb(84, 188, 230);">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
      
      '</div>';


  setExampleModalContent(html);

  // Show the modal.
  jQuery(exampleModal).modal('show');

}

function getExampleModal() {
  return document.getElementById('exampleModal');
}

function setExampleModalContent(html) {
  getExampleModal().querySelector('.modal-content').innerHTML = html;
}

function initExampleModal() {
  var modal = document.createElement('div');
  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'exampleModal');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML =
        '<div class="modal-dialog" role="document">' +
          '<div class="modal-content"></div>' +
        '</div>';
  document.body.appendChild(modal);
  return modal;
}
       

//function to show status edit details

function handleButtonEdit() {
  let CurrentStatus = '';
  let NewStatus = '';
   
     var statusStr = this.parentNode.parentNode.childNodes[4].innerHTML;

     const substr = 'bi bi-x-circle';

  if (statusStr.includes(substr) ){
    CurrentStatus = "Incomplete";
    NewStatus = "Completed ?" ;
  }
     else if(statusStr.includes('bi bi-check-circle h4')){
    CurrentStatus = "Completed";
     NewStatus = "Incomplete ?" ;
  }
    

   var exampleModal = getExampleModal();
 
   // Init the modal if it hasn't been already.
   if (!exampleModal) { exampleModal = initExampleModal(); }
 
   var html =
       '<div class="modal-header" style="background-color: black;">' +
         '<h5 class="modal-title" id="exampleModalLabel" style="color:white;" >Task Details</h5>' +
         '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
           '<span aria-hidden="true">&times;</span>' +
         '</button>' +
       '</div>' +
       '<div class="modal-body" style="background-color:rgb(158, 198, 233);">' +
       '<ul>'+ '<li> Current Status :' + CurrentStatus + '</li>' + '</br>' + '<li> Change to: '+ NewStatus + '</li>' + '</br>' +    
         '<button type="button" class="btnYes" onclick = "updateStatusFunc" style = "width :7% ; align-items: center;margin-left: 10%; overscroll-behavior-block: rgb(147, 147, 235);">Yes</button >'  + '<button type="button" class="btnNo" style = "width :7% ; align-items: center;margin-left: 5%; overscroll-behavior-block: rgb(147, 147, 235);" data-dismiss="modal">No</button>' + 
         
      '</div>' + '<br>' + 
       '<div class="modal-footer" style="background-color:rgb(84, 188, 230);">' +
         '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
       
       '</div>';
 
 
   setExampleModalContent(html);
 
   // Show the modal.
   jQuery(exampleModal).modal('show');
 
 }
 function updateStatusFunc()
 {

 }