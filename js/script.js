// Form Validation Start
function validateForm() {
  const name = document.forms["customer-form"]["name"].value;
  const email = document.forms["customer-form"]["email"].value;
  interest = document.getElementById("interest");
  if (name == "" && email == "" && interest.value == "") {
    alert("Please filled out the form");
    return false;
  } else if (name == "" && email == "") {
    alert("Your name and email must be filled in");
    return false;
  } else if (email == "" && interest.value == "") {
    alert("Your email and the option must be filled in");
    return false;
  } else if (name == "" && interest.value == "") {
    alert("Your name and the option must be filled in");
    return false;
  } else if (name == "") {
    alert("Your name must be filled in");
    return false;
  } else if (email == "") {
    alert("Your email must be filled in");
    return false;
  } else if (interest.value == "") {
    alert("Please select an option below");
    return false;
  } else {
    alert("Thank you for submitting the form");
    return true;
  }
}
//Form Validation End
