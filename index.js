const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios")
const prompt = require("./prompt.js");
const { waitForAnswer } = require('./prompt.js');


const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";

// gpt-3.5-turbo
// text-davinci-003


waitForAnswer()
    .then((answer) => {
        axios.post(apiUrl, {
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "user", "content": 'Pergunta:' + answer }],
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



