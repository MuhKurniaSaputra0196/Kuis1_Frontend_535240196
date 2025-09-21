document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulasi user valid
    const validEmail = "admin@mail.com";
    const validPassword = "admin123";

    // Validasi
    if (email === validEmail && password === validPassword) {
      message.style.color = "green";
      message.textContent = "Login berhasil!";

      localStorage.setItem("loggedIn", "true");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = "Email atau password salah.";
    }
  });
});
