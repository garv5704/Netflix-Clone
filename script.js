const inputBox = document.querySelector(".inputBoxx")

function emptyEmail(){
    if(inputBox.value === ''){
        alert("Please enter your email to get started.")
    }
    else{
        alert("your email address has been submitted");
        inputBox.value = '';
    }
}