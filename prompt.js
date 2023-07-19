const readline = require('readline');

const textoBase = `
    Preciso que você me ajude a responder perguntas somente sobre qualquer conteudo sobre linguistas, tecnicas, exemplos de escrita, pronuncias e tudo mais, sobre qualquer indioma. E com base nisso, gerar respostas a perguntas que vão ser feitas.
    Não deve responder nenhuma pergunta fora do contexto dele.
    Se for fora do contexto, responder "Pergunta fora do contexto. Faça perguntas linguísticas.".

    ps: crie uma referência, cite "De acordo com a empresa Escola de Indiomas"
`

function askUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase());
    });
  });
}

async function waitForAnswer() {
  const answer = await askUser('Deseja tirar suas dúvidas linguísticas? (yes/no): ');

  if (answer === 'yes') {
    const question = await askUser('Qual seria a sua pergunta?: ');
    return textoBase + question;
  } else if (answer === 'no') {
    return 'no';
  } else {
    console.log('Resposta inválida. Por favor, responda com "yes" ou "no".');
    return waitForAnswer();
  }
}

module.exports = { waitForAnswer };
