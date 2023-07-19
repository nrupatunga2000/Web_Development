const form = document.getElementById("form");
const username = document.getElementById("user name");
const email = document.getElementById("email");
const password1 = document.getElementById("Password1");
const password2 = document.getElementById("Password2");

//showError function declaration
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
    
}
//To perform some operation we use .addEventListener
form.addEventListener('submit', function(e){
    
    e.preventDefault() //it is used to prevent refreshing 
    
    //here form validation starts
    if (username.value===0) {
        showError(username,"enter username")
        
    }
})
