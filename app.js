var express = require('express')
var app = express()
var fs = require('fs')
var ejs = require('ejs')

//Render .html
app.engine('html',ejs.renderFile)
//Open port
const port = 80
app.listen(port, () => {
 console.log('Server working...')
})
//Use Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

//Route mian
app.get('/',(req, res) => 
 res.render('home.html')
)
app.use((res, req) => {
 res.status(404).render('error.html')
 console.log('>>Error page not found.')
})

//Set static
app.use(express.static('views'))
