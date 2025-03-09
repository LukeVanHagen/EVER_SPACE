// Alternar para a guia de cadastro
function mostrarCadastro() {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("acesso").style.display = "none";
    document.getElementById("tabCadastro").disabled = true;
    document.getElementById("tabAcesso").disabled = false;
}

// Alternar para a guia de acesso
function mostrarAcesso() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("acesso").style.display = "block";
    document.getElementById("tabCadastro").disabled = false;
    document.getElementById("tabAcesso").disabled = true;
}

// Verificar o acesso com o RFID
async function verificarAcesso() {
    const rfidAcesso = document.getElementById("rfidAcesso").value;
    const response = await fetch("http://localhost:8080/acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rfid: rfidAcesso })
    });
    const result = await response.json();
    const mensagemAcesso = document.getElementById("mensagemAcesso");
    
    if (response.status === 200) {
        mensagemAcesso.textContent = result.message;
        mensagemAcesso.style.color = "green";
    } else {
        mensagemAcesso.textContent = result.message;
        mensagemAcesso.style.color = "red";
    }
}
// Função para carregar os usuários cadastrados no backend
async function carregarUsuarios() {
    try {
        const response = await fetch("http://localhost:8080/usuarios");
        if (response.ok) {
            const usuarios = await response.json();
            const userList = document.getElementById("userList");

            // Limpar a tabela antes de adicionar os novos usuários
            userList.innerHTML = "";
            usuarios.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${user.nome}</td><td>${user.email}</td>`;
                userList.appendChild(row);
            });
        } else {
            console.error("Erro ao carregar usuários:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

// Chamar a função para carregar os usuários assim que a página for carregada
window.onload = carregarUsuarios;


// Enviar o formulário de cadastro com RFID
document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const rfid = document.getElementById("rfid").value;

    await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, rfid })
    });

    document.getElementById("userForm").reset();
    carregarUsuarios();
});
