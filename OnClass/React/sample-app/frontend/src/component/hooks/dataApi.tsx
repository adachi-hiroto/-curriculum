import axios from 'axios'
// 非同期処理

// URL取得
const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export default instance;

