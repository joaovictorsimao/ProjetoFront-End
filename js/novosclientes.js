const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);


// Verifica se existe usuário logado

if (!usuarioLogado) {

    window.location.href = "login.html";

}


// Formulário

const form = document.getElementById("clienteForm");

const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Dados do cliente

    const nome =
        document.getElementById("nome").value.trim();

    const cpf =
        document.getElementById("cpf").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const endereco =
        document.getElementById("endereco").value.trim();


    // Dados do veículo

    const marca =
        document.getElementById("marca").value.trim();

    const modelo =
        document.getElementById("modelo").value.trim();

    const ano =
        document.getElementById("ano").value;

    const placa =
        document.getElementById("placa").value.trim().toUpperCase();

    const cor =
        document.getElementById("cor").value.trim();

    const km =
        document.getElementById("km").value;

    const observacoes =
        document.getElementById("observacoes").value.trim();


    // Busca clientes existentes

    const clientes = obterClientes();


    // Cria o cliente

    const novoCliente = {

        id: Date.now(),

        oficinaId: usuarioLogado.id,

        nome: nome,

        cpf: cpf,

        telefone: telefone,

        email: email,

        endereco: endereco,

        marca: marca,

        modelo: modelo,

        ano: ano,

        placa: placa,

        cor: cor,

        km: km,

        observacoes: observacoes

    };


    // Adiciona o cliente

    clientes.push(novoCliente);


    // Salva

    salvarClientes(clientes);


    mensagem.textContent =
        "Cliente cadastrado com sucesso!";

    mensagem.style.color = "green";


    // Limpa o formulário

    form.reset();


    // Volta para a lista

    setTimeout(function () {

        window.location.href = "clientes.html";

    }, 1000);

});