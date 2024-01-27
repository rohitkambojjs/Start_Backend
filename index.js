console.log("Jay SiyaRam")

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('User Name : Rohit Kamboj')
})

app.get('/login', (req, res) => {
    res.send('<h1>User Login</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(`Example app listening on port ${port}`)