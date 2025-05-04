// Button Click - Change Color
document.getElementById("color-btn").addEventListener("click", () => {
    const text = document.getElementById("color-text");
    text.textContent = "You clicked the button!";
    text.style.color = "green";
  });
  
  // Hover Image - handled by CSS only
  
  // Keypress Detection
  document.getElementById("key-input").addEventListener("keydown", (e) => {
    document.getElementById("key-output").textContent = `You pressed: ${e.key}`;
  });
  
  // Double-click (Secret Action)
  document.getElementById("secret-btn").addEventListener("dblclick", () => {
    const msg = document.getElementById("secret-msg");
    msg.textContent = "🎉 You found the hidden magic!";
    msg.style.color = "purple";
  });
  
  // Tabs / Accordion
  const toggles = document.querySelectorAll(".tab-toggle");
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  
  // Form Validation
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("form-message");
  
    if (!name || !email || !password) {
      message.textContent = "All fields are required.";
      message.style.color = "red";
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.textContent = "Invalid email format.";
      message.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters.";
      message.style.color = "red";
      return;
    }
  
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  });
  
  // Bonus: Real-time password feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("form-message");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short!";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = "";
    }
  });
  