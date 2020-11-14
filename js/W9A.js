var age = prompt("What is your age?");

var is_suscribed = confirm("Are you a suscriber?  OK for yes/Cancel for no");




if (age < 18 && is_suscribed == false)  {
    console.log("the user is younger than 18 and not subscribed");
}

else if (age >= 18 && is_suscribed == false) {
    console.log("the user is 18 and older and not subscribed");
}

else if (age < 18 && is_suscribed == true) {
    console.log("the user is younger than 18 and is subscribed");
}
else if (age >= 18 && is_suscribed == true) {
    console.log("the user is 18 and older and is subscribed");
}



else {
    console.log("this is working for me");
}


console.log(age);



