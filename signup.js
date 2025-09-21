document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("signupMessage");

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!email || !emailPattern.test(email)) {
    return (message.textContent = "Email tidak valid!");
  }

  if (password.length < 8) {
    return (message.textContent = "Password minimal 8 karakter.");
  }

  if (password !== confirmPassword) {
    return (message.textContent = "Konfirmasi password tidak sesuai.");
  }

  const namePattern = /^[A-Za-z\s]{3,32}$/;
  if (!namePattern.test(fullName)) {
    return (message.textContent = "Nama harus 3-32 huruf dan tidak mengandung angka.");
  }

  const phonePattern = /^08\d{8,14}$/;
  if (!phonePattern.test(phone)) {
    return (message.textContent = "Nomor HP harus diawali 08 dan berisi 10-16 digit angka.");
  }

  message.style.color = "green";
  message.textContent = "Pendaftaran berhasil! Silakan login.";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
