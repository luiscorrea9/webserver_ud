require('dotenv').config()
const express = require('express')
const app = express()


const port = process.env.PORT 



app.set('view engine', 'hbs');


app.use(express.static('public'));


app.get('/',(req, res) => {
  res.render('home',{
    nombre: 'luis',
    titulo: 'curso'})
})

  app.get('/generic',(req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
  })

  app.get('/elements',(req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
  })

  app.get('*',(req, res) => {
    res.send('404 | page not found')    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
