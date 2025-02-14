const users = JSON.parse(localStorage.getItem("users")) || [];

function signIn() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (username && email) {
    users.push({ username, email });

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    window.location.href = "cadastro.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function updateTable() {
  const tableBody = document
    .getElementById("user-table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Limpa a tabela

  users.forEach((user) => {
    const row = tableBody.insertRow();
    const cellUsername = row.insertCell(0);
    const cellEmail = row.insertCell(1);
    cellUsername.textContent = user.username;
    cellEmail.textContent = user.email;
  });
}
if (window.location.pathname.endsWith("cadastro.html")) {
  updateTable();
}
