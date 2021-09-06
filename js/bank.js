document.getElementById("login-button").addEventListener("click", function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passField = document.getElementById("user-password");
    const userPass = passField.value;
    // console.log("User Email:", userEmail, "User Password:", userPass);

    if (userEmail == "pola@bap.com" && userPass == "pola@2021"){
        window.location.href="/banking.html", "_blank";
    }
    else {
        console.log("Invalid User");
    }
    
})


document.getElementById("deposit-button").addEventListener("click", function(){
    const depositNumber = document.getElementById("deposit-input");
    const depositAmount = depositNumber.value;
    console.log(depositAmount);
})