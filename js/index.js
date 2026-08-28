const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {
    window.location.href = "dashboard.html";
} else {
    window.location.href = "login.html";
}