window.onload = function(){

    initTodoDropdown();

    //get the handle of the dropdown box
  
}
function initTodoDropdown() {

  /*
    let ToDoList = [
        {
            "id": 1,
            "userid": 11,
            "name" : "Rob",
            "category": "Personal Task",
            "description": "Finish studying for ENG 211 exam",
            "deadline": "2024-11-25",
            "priority": "Medium",
            "completed": false
          },
          {
            "id": 2,
            "userid": 22,
            "name" : "Pranamya",
            "category": "Personal Task",
            "description": "Do Math Revision",
            "deadline": "2024-05-12",
            "priority": "Medium",
            "completed": false
          },
          {
            "id": 3,
            "userid": 33,
            "name" : "Nidhi",
            "category": "Office Task",
            "description": "Complete Traliant trainings",
            "deadline": "2024-06-15",
            "priority": "Medium",
            "completed": false
          },
          {
            "id": 4,
            "userid": 44,
            "name" : "Abhi",
            "category": "Office Task",
            "description": "Finish Capstone Project",
            "deadline": "2024-07-11",
            "priority": "Medium",
            "completed": false
          },
      ];
     */

      //fetch the names from the URL
fetch ("http://localhost:8083/api/users"){}


    // load the dropdown list

    let dropdownId = document.getElementById("selectUser");
  
 
    let length = ToDoList.length;
    for (let i = 0; i < length; i++) {
 
       // create the option element and set the text and
       // value at the same time
       let theOption = new Option(ToDoList[i].name, ToDoList[i].id); 
 
       // append the option as a child of (inside) the 
       // select element
       dropdownId.appendChild(theOption);
    }
}