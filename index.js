
function saveToLocalStorage(event){
    event.preventDefault();
    var name = event.target.username.value;
    var email= event.target.emailID.value;
    localStorage.setItem('name' ,name);
    localStorage.setItem('email' ,email);
    const obj ={
        name,
        email,
    }
    localStorage.setItem('userdetails' , JSON.stringify(obj));
  }
  
  
  