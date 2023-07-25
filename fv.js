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

//email validation function declaration
function isValidEmail(email) {

    //this is a regular expression for email validation which you have to fetch from internet
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

//showSuccess function declaration
function showSuccess(input) {
    
    formControl = input.parentElement;
    formControl.className = "form-control success";
}

//check requaired function 
// function checkRequaired(inputArr) {
//     inputArr.foreach(function(input) {
//         if (input.values ==='') {

//             showError(input,mess)
            
//         }

        
//     })
    
//}

// this is a if else style of doing


//To perform some operation we use .addEventListener
form.addEventListener('submit', function(e){
    
    e.preventDefault() //it is used to prevent refreshing 
    
    //here form validation starts

    //logic for username
    if (username.value==='') {
        showError(username,"enter username")
        
    }else{
        showSuccess(username);
    }

    //logic for email
    if (email.value==='') {
        showError(email,"enter Email")
        
    }else{
        showSuccess(email);
    }
    
    //elseif is used to check the email format. if it is not valid then call error function
    // elseif(!isValidEmail(email.values)) {

    //     showError(username,"enter username")
    // }
    // {
    //     showSuccess(email);
    // }

    //logic for Password1
    if (password1.value==='') {
        showError(password2,"enter password")
        
    }else{
        showSuccess(password1);
    }

    //logic for password2
    if (password2.value==='') {
        showError(password2,"enter password")
        
    }else{
        showSuccess(password2);
    }
})

//To perform some operation we use .addEventListener
// form.addEventListener('submit', function(e){
    
//     e.preventDefault() //it is used to prevent refreshing 

//     checkRequaired([username,email,password1,password2])
// })