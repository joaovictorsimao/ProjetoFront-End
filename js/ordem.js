// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    window.location.href = "login.html";
}

const form = document.getElementById("formOrdem");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const veiculo = document.getElementById("veiculo").value;
    const placa = document.getElementById("placa").value;
    const problema = document.getElementById("problema").value;
    const servico = document.getElementById("servico").value;
    const pecas = document.getElementById("pecas").value;
    const valor = document.getElementById("valor").value;
    const status = document.getElementById("status").value;

    const hoje = new Date();

    const data = hoje.toLocaleDateString("pt-BR");

    const novaOrdem = {

        id: Date.now(),

        oficinaId: usuarioLogado.id,

        data: data,

        cliente: cliente,

        veiculo: veiculo,

        placa: placa,

        problema: problema,

        servico: servico,

        pecas: pecas,

        valor: Number(valor),

        status: status

    };

    const ordens = obterOrdens();

    ordens.push(novaOrdem);

    salvarOrdens(ordens);

    alert("Ordem de serviço cadastrada com sucesso!");

    form.reset();

});