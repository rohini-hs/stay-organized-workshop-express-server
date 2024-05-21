let ret = CheckUser();

DeleteData();

function DeleteData(){
    fetch("http://localhost:8083/api/users/9",
    {
      method: "DELETE"
   })
   .then(response => response.text()) // or res.json()
   .then(response => {
   
   })
    

}
function CheckUser() {
      

   // check if the user is already present 
   fetch("http://localhost:8083/api/users/")
   .then(Response => Response.json())
   .then(data =>
     {
       for(let i=0; i<data.length; i++) 
     {
        
      console.log(data[i].name)
 
     }
 
    })
    }
 