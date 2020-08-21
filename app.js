var express = require('express')

var app = express()
app.set('view engine', 'hbs')

var hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentTime', () => {
    return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ' ' + new Date().toString()
})
hbs.registerHelper('user', () => {
    return 'mudassir'
})


app.get('/', (req, res) => {
    res.render('home', {
        title: "Home Page"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page"
    })
})

app.get('/register', (req, res) => {
    res.render('register', {
        title: "Register Page"
    })
})

app.listen(4000, () => {
    console.log('you are listining at port 4000')
})