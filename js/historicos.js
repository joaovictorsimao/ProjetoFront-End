// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    window.location.href = "login.html";
}

// Busca todas as ordens
let ordens = obterOrdens();

// Filtra apenas as ordens da oficina logada
ordens = ordens.filter(ordem => ordem.oficinaId === usuarioLogado.id);

const tabela = document.getElementById("listaHistorico");
const pesquisa = document.getElementById("pesquisa");

// Carrega a tabela
function carregarHistorico(lista) {

    tabela.innerHTML = "";

    if (lista.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td colspan="7">
                    Nenhuma ordem cadastrada.
                </td>
            </tr>
        `;

        return;
    }

    lista
        .sort((a, b) => b.id - a.id)
        .forEach(ordem => {

            const valor = Number(ordem.valor || 0).toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            );

            tabela.innerHTML += `
                <tr>

                    <td>${ordem.data}</td>

                    <td>${ordem.cliente}</td>

                    <td>${ordem.veiculo}</td>

                    <td>${ordem.placa}</td>

                    <td>${ordem.problema}</td>

                    <td>${ordem.status}</td>

                    <td>${valor}</td>

                </tr>
            `;

        });

}

carregarHistorico(ordens);

// Pesquisa
pesquisa.addEventListener("keyup", function () {

    const texto = pesquisa.value.toLowerCase();

    const resultado = ordens.filter(ordem =>

        ordem.cliente.toLowerCase().includes(texto) ||

        ordem.placa.toLowerCase().includes(texto) ||

        ordem.veiculo.toLowerCase().includes(texto)

    );

    carregarHistorico(resultado);

});