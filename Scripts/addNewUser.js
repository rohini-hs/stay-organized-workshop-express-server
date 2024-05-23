let dropdownId = document.getElementById("selectUser");
let count = 0;
let datalog = ''

window.onload = function () {

    myFunction();
    setTimeout("", 10000)
    btnAddId = document.getElementById("btnAddnewUser")
    btnAddId.onclick = AddUserDetails;
}

function AddUserDetails() {

    let newName = document.getElementById("addNewName").value;
    let newUserName = document.getElementById("AddNewUserName").value;
    let newPassword = document.getElementById("AddNewUserPassword").value;

    if (newName != '' && newUserName != '' && newPassword != '') {
        datalog = {
            id: "",
            name: document.getElementById("addNewName").value,
            username: document.getElementById("AddNewUserName").value,
            password: document.getElementById("AddNewUserPassword").value,
        }
          checkUser();
        if (count != 1) {
            let result = btnAddUserClicked(datalog);
        } else {
            return;
        }

    } else {
        alert("One or more fields are empty");
        return;
    }


}


function btnAddUserClicked(bodyData) {

    //check if password and retype passwords are same
    let passString = document.getElementById("AddNewUserPassword");
    let checkPassString = document.getElementById("AddNewUserRePassword");
    if (passString.value != checkPassString.value) {
        window.alert("Passwords mismatch!");
        return;
    }

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
            let message = document.getElementById("message");
            message.innerHTML = ("New User " + bodyData.username + " added successfully!")

        });
}

function myFunction() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav");

    hamburgerMenu.addEventListener("click", () => {
        nav.classList.toggle("active")
    });
}

async function checkUser() {
    let nameString = document.getElementById("addNewName");
    count = 0;
 
    fetch("http://localhost:8083/api/users/")
    .then(Response => Response.json())
    .then(data =>
      {
        for(let i=0; i<data.length; i++) 
      {
        if (nameString.value == data[i].name){
           alert("User already exists")
           count = 1;
           return;
        }
  
      }
  
     })
     return 1;
    
}