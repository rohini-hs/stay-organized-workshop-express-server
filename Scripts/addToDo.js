let dropdownId = document.getElementById("selectUser");

window.onload = function(){

    initTodoDropdown();

    //get the handle of the button
    btnDetails = document.getElementById("btnDetails");
    btnDetails.onclick = DisplayDetails;

}
function initTodoDropdown() {
      
    //Add the names to dropdown
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
}

/*
function populateData()
{
  let tableId = document.getElementById("tableTodoList")

    fetch("http://localhost:8083/api/todos/")
    .then(Response => Response.json())
    .then(data => {
        for(let i=0; i<data.length; i++) {
            let row = tableId.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
           
            cell1.innerHTML = data[i].description;
            cell2.innerHTML = data[i].deadline;
        
            const detailsCell = row.insertCell();

            let anchor = document.createElement("a");
            anchor.href = "detail.html?cid=" + data[i].id;
            //anchor.href = "detail.html?cid=3" ;
            anchor.text = "See details";  
            detailsCell.appendChild(anchor);
            
    }
})
} */

function DisplayDetails()
{
  //get the name from the select box and its id 
  let selectName= dropdownId.value;

  //fetch the details of this user
  fetch("http://localhost:8083/api/todos/"+selectName)
  .then(Response => Response.json())
  .then(data =>
    {
    let showvalue = document.getElementById("showvalue");

        showvalue.innerHTML = data.description ;
        console.log(data.deadline)
    
  })

}