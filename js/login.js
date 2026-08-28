const form = document.getElementById("loginForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        const mensagem = document.getElementById("mensagem");

        const usuarios = obterUsuarios();

        const usuario = usuarios.find(function (usuario) {

            return usuario.email === email &&
                   usuario.senha === senha;

        });

        if (!usuario) {

            mensagem.textContent = "E-mail ou senha incorretos.";
            mensagem.style.color = "red";

            return;
        }

        // Salva o usuário que fez login
        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuario)
        );

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";

        // Aguarda um pouco para mostrar a mensagem
        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 500);

    });

}