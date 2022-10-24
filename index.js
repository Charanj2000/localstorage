
function saveToLocalStorage(event){
    event.preventDefault();
    var name = event.target.username.value;
    var email= event.target.emailID.value;
    
    const obj ={
        name,
        email,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showNewUserScreen(obj)
  }
 
 function showNewUserScreen(user){
    
 const parentNode =document.getElementById('listofusers');
     const childHTML =`<li id=${user.email}> ${user.name} - ${user.email}
                <button onclick=deleteUser('${user.email}')>DELETE USER</button>    
                <button onclick=editUserDetails('${user.email}','${user.name}')> EDIT USER </button>
      </li>`


     parentNode.innerHTML = parentNode.innerHTML+childHTML;
 }
 function editUserDetails(emailID,username){
    document.getElementById('email').value =emailID;
    document.getElementById('username').value =username;

    deleteUser(emailID);


}


 function deleteUser(emailID){
    console.log(emailID)
    localStorage.removeItem(emailID);
    removerUserFromScreen(emailID);

 }

 function removerUserFromScreen(emailID){
    const parentNode =document.getElementById('listofusers');
    const childNodeToBeDeleted =document.getElementById(emailID);

    parentNode.removeChild(childNodeToBeDeleted)
 }
  

 