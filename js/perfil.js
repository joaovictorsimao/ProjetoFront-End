// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    window.location.href = "login.html";
}

const form = document.getElementById("perfilForm");

// Preenche os campos
document.getElementById("oficina").value = usuarioLogado.oficina;
document.getElementById("proprietario").value = usuarioLogado.proprietario;
document.getElementById("telefone").value = usuarioLogado.telefone;
document.getElementById("cidade").value = usuarioLogado.cidade;
document.getElementById("email").value = usuarioLogado.email;

// Salvar alterações
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const usuarios = obterUsuarios();

    const indice = usuarios.findIndex(function (usuario) {
        return usuario.id === usuarioLogado.id;
    });

    if (indice === -1) {
        alert("Usuário não encontrado.");
        return;
    }

    usuarios[indice].oficina = document.getElementById("oficina").value.trim();
    usuarios[indice].proprietario = document.getElementById("proprietario").value.trim();
    usuarios[indice].telefone = document.getElementById("telefone").value.trim();
    usuarios[indice].cidade = document.getElementById("cidade").value.trim();
    usuarios[indice].email = document.getElementById("email").value.trim();

    const novaSenha = document.getElementById("senha").value.trim();

    if (novaSenha !== "") {
        usuarios[indice].senha = novaSenha;
    }

    salvarUsuarios(usuarios);

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarios[indice])
    );

    alert("Perfil atualizado com sucesso!");

});