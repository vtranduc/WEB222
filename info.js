const abc = 65;

var regex = {
  name: /^[A-Z][a-z]{1,}$/,
  password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z][A-Za-z\d]{5,}$/,
  username: /^[A-Za-z][A-Za-z\d]{5,}$/,
};

function clearForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("password1").value = "";
  document.getElementById("password2").value = "";
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  ["status1", "status2", "status3"].forEach(
    (id) => (document.getElementById(id).checked = false)
  );
}

function formValidation() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var age = parseInt(document.getElementById("age").value);
  var selection = ["status1", "status2", "status3"].findIndex(
    (id) => document.getElementById(id).checked
  );

  var innerHTML = "";
  var count = 0;
  var max = 5;

  if (!regex.name.test(firstName) && ++count <= max)
    innerHTML +=
      "<p>ERROR: First name must start with a cap and only alphabet allowed.</p>";
  if (!regex.name.test(lastName) && ++count <= max)
    innerHTML +=
      "<p>ERROR: Last name must start with a cap and only alphabet allowed.</p>";
  if (!regex.password.test(password1) && ++count <= max)
    innerHTML += `
  <p>
    ERROR: Password must be at least 6 characters long, must start with an alphabet, must have
    at least 1 digit and 1 uppercase.
  </p>
  `;
  if (password1 !== password2 && ++count <= max)
    innerHTML += "<p>Passwords do not match.</p>";
  if (!regex.username.test(username) && ++count <= max)
    innerHTML +=
      "<p>ERROR: Username must start with an alphabet, must have at least 6 characters.</p>";
  if (selection === -1 && ++count <= max)
    innerHTML +=
      "<p>ERROR: In Education Status, Please choose from one of the following</p>";
  if (!email && ++count <= max)
    innerHTML += "<p>ERROR: Please enter a valid email address.</p>";
  if ((!age || age < 18 || age > 60) && ++count <= max)
    innerHTML += "<p>ERROR: Age must be between 18 and 60.</p>";

  if (innerHTML) {
    // Error case
    document.getElementById("error-list").innerHTML = innerHTML;
    console.log("FAILEDfdf");
    return false;
  } else {
    alert("Success");
    return true;
  }
}
