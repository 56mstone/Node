const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Buen dia Martin!, Transmitiendo desde AWS')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
