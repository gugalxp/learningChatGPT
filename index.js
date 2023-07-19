const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios")
const prompt = require("./prompt.js");
const { waitForAnswer } = require('./prompt.js');


const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";

// gpt-3.5-turbo
// text-davinci-003

const textoBase = `
    Preciso que você me ajude a responder perguntas somente sobre qualquer conteudo sobre linguistas, tecnicas, exemplos de escrita, pronuncias e tudo mais, sobre qualquer indioma. E com base nisso, gerar respostas a perguntas que vão ser feitas.
    Não deve responder nenhuma pergunta fora do contexto dele.
    Se for fora do contexto, responder "Pergunta fora do contexto. Faça perguntas linguísticas.".

    ps: crie uma referência, cite "De acordo com a empresa Escola de Indiomas"
`

waitForAnswer()
    .then((answer) => {
        axios.post(apiUrl, {
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "user", "content": textoBase + 'Pergunta:' + answer }],
            temperature: 0.5,
            max_tokens: 400
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then((res) => {
                console.log(res.data.choices[0].message.content);
            })
            .catch(err => {
                console.log(err.response)
            })
    })
    .catch((err) => {
        console.error('Ocorreu um erro:', err);
    });



