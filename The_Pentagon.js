let isUserReady = confirm("Are you ready?");
    console.log(isUserReady);
    if (isUserReady) {
        alert("CONFIRMED. User is ready");
    } else {
        console.log("DENIED. User is NOT ready");  
    }
            
let number = prompt("Are you 18 years old or above?", "#");
    if (number<18) {
        console.log("UNABLE TO PROCEED. The user is below 18")
    } else {
        alert ("CONFIRM. the user is 18 and above")
    }
 