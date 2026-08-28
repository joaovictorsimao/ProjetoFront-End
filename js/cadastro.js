const form = document.getElementById("cadastroForm");

const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Pega os valores do formulário

    const oficina =
        document.getElementById("oficina").value.trim();

    const proprietario =
        document.getElementById("proprietario").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const cidade =
        document.getElementById("cidade").value.trim();

    const email =
        document.getElementById("email").value.trim().toLowerCase();

    const senha =
        document.getElementById("senha").value;

    const confirmarSenha =
        document.getElementById("confirmarSenha").value;


    // Verifica as senhas

    if (senha !== confirmarSenha) {

        mensagem.textContent =
            "As senhas não são iguais.";

        mensagem.style.color = "red";

        return;
    }


    // Busca os usuários existentes

    const usuarios = obterUsuarios();


    // Verifica se o e-mail já está cadastrado

    const usuarioExistente = usuarios.find(function (usuario) {

        return usuario.email.toLowerCase() === email;

    });


    if (usuarioExistente) {

        mensagem.textContent =
            "Este e-mail já está cadastrado.";

        mensagem.style.color = "red";

        return;
    }


    // Cria a nova oficina

    const novoUsuario = {

        id: Date.now(),

        oficina: oficina,

        proprietario: proprietario,

        telefone: telefone,

        cidade: cidade,

        email: email,

        senha: senha

    };


    // Adiciona o usuário na lista

    usuarios.push(novoUsuario);


    // Salva os usuários

    salvarUsuarios(usuarios);


    // Mensagem de sucesso

    mensagem.textContent =
        "Oficina cadastrada com sucesso!";

    mensagem.style.color = "green";


    // Limpa o formulário

    form.reset();


    // Vai para o login

    setTimeout(function () {

        window.location.href = "login.html";

    }, 1000);

});