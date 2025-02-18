document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha })
    });

    document.getElementById("userForm").reset();
    carregarUsuarios();
});

async function carregarUsuarios() {
    const response = await fetch("http://localhost:8080/usuarios");
    const usuarios = await response.json();
    const userList = document.getElementById("userList");
    
    userList.innerHTML = "";
    usuarios.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${user.nome}</td><td>${user.email}</td>`;
        userList.appendChild(row);
    });
}

carregarUsuarios();
