require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Ankur Is Here')
})

app.get('/twitter', (req, res) => {
  res.send('Nice Having you')
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`)
})
