function login() {
  const nome = prompt("Digite seu nome para cadastro/login:");
  if (nome) {
    localStorage.setItem('usuario_logado', nome);
    alert("Login realizado como: " + nome);
    location.reload();
  }
}

function logout() {
  localStorage.removeItem('usuario_logado');
  alert("Você saiu da conta.");
  location.reload();
}
