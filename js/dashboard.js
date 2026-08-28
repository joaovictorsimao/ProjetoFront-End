// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    window.location.href = "login.html";
}

// Nome da oficina
const nomeOficina = document.getElementById("nomeOficina");

if (nomeOficina) {
    nomeOficina.textContent =
        "Bem-vindo, " + usuarioLogado.oficina;
}

// Busca os dados
const clientes = obterClientes().filter(cliente =>
    cliente.oficinaId === usuarioLogado.id
);

const ordens = obterOrdens().filter(ordem =>
    ordem.oficinaId === usuarioLogado.id
);

// Cards
const totalClientes = document.getElementById("totalClientes");
const ordensAbertas = document.getElementById("ordensAbertas");
const ordensConcluidas = document.getElementById("ordensConcluidas");
const faturamento = document.getElementById("faturamento");

if (totalClientes)
    totalClientes.textContent = clientes.length;

const abertas = ordens.filter(ordem =>
    ordem.status === "Em andamento"
);

const concluidas = ordens.filter(ordem =>
    ordem.status === "Concluído"
);

if (ordensAbertas)
    ordensAbertas.textContent = abertas.length;

if (ordensConcluidas)
    ordensConcluidas.textContent = concluidas.length;

// Calcula faturamento
let total = 0;

concluidas.forEach(ordem => {
    total += Number(ordem.valor);
});

if (faturamento) {
    faturamento.textContent =
        total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}

// Últimas ordens
const listaOrdens = document.getElementById("listaOrdens");

if (listaOrdens) {

    listaOrdens.innerHTML = "";

    if (ordens.length === 0) {

        listaOrdens.innerHTML = `
            <tr>
                <td colspan="4">
                    Nenhuma ordem cadastrada.
                </td>
            </tr>
        `;

    } else {

        ordens
            .slice(-5)
            .reverse()
            .forEach(ordem => {

                listaOrdens.innerHTML += `
                    <tr>

                        <td>${ordem.cliente}</td>

                        <td>${ordem.veiculo}</td>

                        <td>${ordem.servico}</td>

                        <td>${ordem.status}</td>

                    </tr>
                `;

            });

    }

}

// Logout
const logout = document.getElementById("logout");

if (logout) {

    logout.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("usuarioLogado");

        window.location.href = "login.html";

    });

}