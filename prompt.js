const readline = require('readline');

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
    return question;
  } else if (answer === 'no') {
    return 'no';
  } else {
    console.log('Resposta inválida. Por favor, responda com "yes" ou "no".');
    return waitForAnswer();
  }
}

module.exports = { waitForAnswer };
