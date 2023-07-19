const axios = require("axios")

const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/models";

axios.get(apiUrl, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
    .then((res) => {
        console.log(res.data.data.map((data) => data.id));
    })
    .catch(err => {
        console.log(err)
    })