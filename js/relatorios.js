// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    window.location.href = "login.html";
}

// Busca os dados da oficina
const clientes = obterClientes().filter(cliente =>
    cliente.oficinaId === usuarioLogado.id
);

const ordens = obterOrdens().filter(ordem =>
    ordem.oficinaId === usuarioLogado.id
);

// Cards
document.getElementById("totalClientes").textContent = clientes.length;

document.getElementById("totalOrdens").textContent = ordens.length;

const concluidas = ordens.filter(ordem =>
    ordem.status === "Concluído"
);

document.getElementById("ordensConcluidas").textContent = concluidas.length;

// Calcula faturamento
let faturamento = 0;

concluidas.forEach(ordem => {
    faturamento += Number(ordem.valor);
});

document.getElementById("faturamentoTotal").textContent =
faturamento.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

// Tabela
const tabela = document.getElementById("listaRelatorio");

tabela.innerHTML = "";

if (ordens.length === 0) {

    tabela.innerHTML = `
        <tr>
            <td colspan="4">
                Nenhuma ordem encontrada.
            </td>
        </tr>
    `;

} else {

    ordens
        .sort((a, b) => b.id - a.id)
        .slice(0, 10)
        .forEach(ordem => {

            tabela.innerHTML += `
                <tr>

                    <td>${ordem.cliente}</td>

                    <td>${ordem.veiculo}</td>

                    <td>${ordem.status}</td>

                    <td>
                        ${Number(ordem.valor).toLocaleString(
                            "pt-BR",
                            {
                                style:"currency",
                                currency:"BRL"
                            }
                        )}
                    </td>

                </tr>
            `;

        });

}