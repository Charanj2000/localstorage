
function saveToLocalStorage(event){
    event.preventDefault();
    var name = event.target.username.value;
    var email= event.target.emailID.value;
    localStorage.setItem('name' ,name);
    localStorage.setItem('email' ,email);
  }
  
  
  