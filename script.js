function validateUserId(userId) {
  if (userId.length >= 12 || userId.length < 5) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password.length >= 12 || password.length < 7) {
    return false;
  } else {
    return true;
  }
}
function validateName(name) {
  var regLetters = /^[A-Za-z ]+$/;
  if (regLetters.test(name) == false) {
    return false;
  } else {
    return true;
  }
}

function countrySelect(country) {
  if (country == "Default") {
    return false;
  } else {
    return true;
  }
}

function validateEmail(frm) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = frm;
  if (reg.test(address) == false) {
    return false;
  } else {
    return true;
  }
}

function validsex(gender) {
  x = 0;
  if (gender[0].checked) {
    x++;
  }
  if (gender[1].checked) {
    x++;
  }
  if (x == 0) {
    return false;
  } else {
    return true;
  }
}

function validateLangSelection() {
  if (document.getElementById("english").checked) {
    return true;
  } else if (document.getElementById("nonEnglish").checked) {
    return true;
  } else {
    return false;
  }
}

function validateForm(frm) {
  var userId = frm.userId.value;
  var password = frm.password.value;
  var name = frm.name.value;
  var country = frm.country.value;
  var email = frm.email.value;
  var gender = frm.gender;
  var returnvalue = false;

  //errors msgs(using divs)
  //so I have used divs to show an error because it mentioned in the question that we can use our desired way to show error messages
  //I have also commented the alert messages that I have to use,if I have to choose alerts to show errors

  var userIdError = document.getElementById("userIdError");
  var passwordError = document.getElementById("passwordError");
  var usernameError = document.getElementById("usernameError");
  var countrySelectionError = document.getElementById("countrySelectionError");
  var emailError = document.getElementById("emailError");
  var genderSelectionError = document.getElementById("selectSexError");
  var langSelectionError = document.getElementById("selectLangError");

  var a = true;
  var b = true;
  var c = true;
  var d = true;
  var e = true;
  var f = true;
  var g = true;
  var h = true;

  if (userId == "" || password == "" || name == "" || email == "") {
    alert("there are empty fields, please fill them ");
    a = false;
  }
  if (userId == "") {
    frm.userId.style.border = "1px solid red";
  } else {
    frm.userId.style.border = "1px solid black";
  }
  if (password == "") {
    frm.password.style.border = "1px solid red";
  } else {
    frm.password.style.border = "1px solid black";
  }

  if (name == "") {
    frm.name.style.border = "1px solid red";
  } else {
    frm.name.style.border = "1px solid black";
  }

  if (email == "") {
    frm.email.style.border = "1px solid red";
  } else {
    frm.email.style.border = "1px solid black";
  }

  if (validateUserId(userId) == false) {
    //alert(" UserId required and length should be between 5 to 7 characters");
    b = false;
    userIdError.style.display = "block";
  } else {
    userIdError.style.display = "none";
  }

  if (validatePassword(password) == false) {
    c = false;
    //alert("Password required and length should be between 7 to 12 characters");
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }

  if (validateName(name) == false) {
    //alert("Username should have alphabet characters only");
    d = false;
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }

  if (countrySelect(country) == false) {
    //alert("pls select a country");
    e = false;
    countrySelectionError.style.display = "block";
  } else {
    countrySelectionError.style.display = "none";
  }

  if (validateEmail(email) == false) {
    //alert("Invalid e-mail Address ");
    f = false;
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  if (validsex(gender) == false) {
    //alert ("Please select the Gender ");
    g = false;
    genderSelectionError.style.display = "block";
  } else {
    genderSelectionError.style.display = "none";
  }
  if (validateLangSelection() == false) {
    //alert ("Please select at least one ");
    h = false;
    langSelectionError.style.display = "block";
  } else {
    langSelectionError.style.display = "none";
  }
  if (
    a == true &&
    b == true &&
    c == true &&
    d == true &&
    e == true &&
    f == true &&
    g == true &&
    h == true
  ) {
    returnvalue = true;
    alert("registration SUCESS ");
  }
  return returnvalue;
}
