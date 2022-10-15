
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
     const childHTML =`<li> ${user.name} - ${user.email}</li>`

     parentNode.innerHTML = parentNode.innerHTML+childHTML;
 }
 
 
  
  