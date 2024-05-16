let dropdownId = document.getElementById("selectUser");

window.onload = function () {
    myFunction();
    setTimeout("",10000)
    

     btnAddId = document.getElementById("btnAddnewUser")
     btnAddId.onclick = AddUserDetails;
}



function AddUserDetails(){
 
    let datalog = {
        id: "",
        name : document.getElementById("addNewName").value,
        username : document.getElementById("AddNewUserName").value,
        password : document.getElementById("AddNewUserPassword").value,

    }
    let result = btnAddUserClicked(datalog);
    console.log(result);
}

function btnAddUserClicked(bodyData) {

    //get the name from the select box and its id 
   

    // fetch student #1 (hard-coded) to be updated
   
      fetch("http://localhost:8083/api/users/", {
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
            let message = "New users added! " ;
            
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

