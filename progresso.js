const CHAVE_PROGRESSO = 'devocional_progresso';

function getUsuarioAtual() {
  return localStorage.getItem('usuario_logado') || 'anonimo';
}

function getProgresso() {
  const usuario = getUsuarioAtual();
  const dados = JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {};
  return dados[usuario] || {};
}

function salvarProgressoUsuario(progresso) {
  const usuario = getUsuarioAtual();
  const dados = JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {};
  dados[usuario] = progresso;
  localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(dados));
}

function marcarConcluido(id) {
  const progresso = getProgresso();
  progresso[id] = true;
  salvarProgressoUsuario(progresso);
}

function isConcluido(id) {
  const progresso = getProgresso();
  return progresso[id] === true;
}
