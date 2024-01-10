import express from 'express';
const app = express();

let port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})