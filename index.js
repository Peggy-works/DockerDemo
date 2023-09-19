const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");   
})

app.get('/foo', (req, res) => {
    res.status(500).json({ error: "Internal server error" })
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})