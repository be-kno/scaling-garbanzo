import express from 'express';
const app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send('Wubba Lubba Dub-Dub')
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})