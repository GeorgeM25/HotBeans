// JavaScript source code


function validateEmail() {
    const email = document.getElementById("email");

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an e-mail address!");
            email.reportValidity();
            alert("Enter the email address properly!")
        } else {
            email.setCustomValidity("");
        }
    });
}




function validateForm() {

    var x = document.forms["form"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }

    var y = document.forms["form"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }

    var z = document.forms["form"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }

    var a = document.forms["form"]["gender"].value;
    if (a == "") {
        alert("Gender must be filled out");
        return false;
    }

    else {
        alert("Thanks for submitting!")
    }
}