document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    if (password !== confirmPassword) {
      message.style.color = "red";
      message.textContent = "Passwords do not match.";
      return;
    }

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    message.style.color = "green";
    message.textContent = "Registration successful!";
    window.location.href = "login.html";
  });
