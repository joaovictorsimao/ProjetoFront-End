function obterUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function obterClientes() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

function salvarClientes(clientes) {
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function obterOrdens() {
    return JSON.parse(localStorage.getItem("ordens")) || [];
}

function salvarOrdens(ordens) {
    localStorage.setItem("ordens", JSON.stringify(ordens));
}

function obterClientes() {

    return JSON.parse(
        localStorage.getItem("clientes")
    ) || [];

}


function salvarClientes(clientes) {

    localStorage.setItem(
        "clientes",
        JSON.stringify(clientes)
    );

}