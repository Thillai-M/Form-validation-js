function validate_form(event) {
    event.preventDefault();

    var fname_input = document.getElementById("fname-input").value;
    var Phone_input = document.getElementById("Phone-input").value; 
    var lname_input = document.getElementById("lname-input").value;
    var mail_input = document.getElementById("mail-input").value;
    var country_input = document.getElementById("country-input").value;
    var user_input = document.getElementById("user-input").value;
    var state_input = document.getElementById("state-input").value;
    var city_input = document.getElementById("city-input").value;
    var reference_input = document.getElementById("reference-input").value;


    if (fname_input === "" || fname_input.length < 3) {
        document.getElementById("fname-inputerror").style.display = "block";
    }


    if (lname_input === "" || lname_input.length < 3) {
        document.getElementById("lname-inputerror").style.display = "block";
    }


    if (Phone_input === "") { 
        document.getElementById("phone-inputerror").style.display = "block";
    }
    else if (!validatePhoneNumber(Phone_input)) {
        document.getElementById("numbermatch-inputerror").style.display = "block";
    }
        
    if (mail_input === "") {
        document.getElementById("mail-inputerror").style.display = "block";
    }
    else if (!validateEmail(mail_input)) {
        document.getElementById("mailmatch-inputerror").style.display = "block";
    }


    if (country_input === "") {
        document.getElementById("country-inputerror").style.display = "block";
    }


    if (state_input === "") {
        document.getElementById("state-inputerror").style.display = "block";
    }


    if (city_input === "") {
        document.getElementById("city-inputerror").style.display = "block";
    }


    if (reference_input === "") {
        document.getElementById("reference-inputerror").style.display = "block";

    } else if (reference_input === "" || reference_input.length < 4) {
        document.getElementById("refrence-length-inputerror").style.display = "block";
    }



    if (user_input === "") {
        document.getElementById("user-inputerror").style.display = "block";
    }
    else if (user_input === "" || user_input.length < 8) {
        document.getElementById("user-length-inputerror").style.display = "block";
    }

}

function validateEmail(mail_input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail_input);
}

function validatePhoneNumber(Phone_input) {
    const regex = /^(?:\+?1\s*(?:[.-]\s*)?)?(?:(\(\s*\d{3}\s*\))|\d{3})(?:\s*[.-]\s*)?\d{3}(?:\s*[.-]\s*)?\d{4}$/;
    return regex.test(Phone_input);
}
