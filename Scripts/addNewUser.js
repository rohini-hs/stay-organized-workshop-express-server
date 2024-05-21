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

    //check if password and retype passwords are same
    let passString = document.getElementById("AddNewUserPassword");
    let checkPassString = document.getElementById("AddNewUserRePassword");
    if (passString.value != checkPassString.value){
         window.alert("Passwords mismatch!");
        return;
    }

     //check the users
    CheckUser();

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
            let message = document.getElementById("message") ;
            message.innerHTML= ("New User "+ bodyData.username + " added successfully!")
            
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

function CheckUser() {
    let nameString = document.getElementById("addNewName");

    // check if the user is already present 
    fetch("http://localhost:8083/api/users/")
   .then(Response => Response.json())
   .then(data =>
     {
       for(let i=0; i<data.length; i++) 
     {
        
      if (data[i].name == nameString.value){
        alert("User already exists")
       return;
      }
 
     }
 
    })
    }
  
  
  