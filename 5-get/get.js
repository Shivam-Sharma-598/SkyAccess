function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    alert("Account Created Successfully (Demo)");
    window.location.href = "index.html";
  }
  