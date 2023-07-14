const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const exp = require('constants');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

const route = require('./routes');
const db = require('./config/db');

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine({ 
    helpers: {
    sum(a,b) { return a + b; },
}}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './resources/views'));

app.use(methodOverride('_method'))
route(app);
db.conect();

app.listen(PORT, () => console.log('server connected'));
