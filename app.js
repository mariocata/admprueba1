const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const datab = require('./config/database')

datab.authenticate()
    .then(()=> console.log('Database CONNECTED '))
    .catch(err => console.log('ERROR' + err))


const app = express();

app.use('/adm', require('./routes/adm'));

const PORT = process.env.PORT || 3000;


app.get('/', (req,res) => res.render('index', { layout: 'homepage'}));


//hadlebars
app.engine('handlebars', exphbs({ defaultLayout : 'main'}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT, console.log(`Sever starter on port  ${PORT}`));


