const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        // Dog APIからランダムな犬の画像データを取得
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        
        res.render('index', { 
            dogImageUrl: response.data.message 
        });
    } catch (error) {
        console.error('APIの取得に失敗しました:', error);
        res.status(500).send('エラーが発生しました');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});