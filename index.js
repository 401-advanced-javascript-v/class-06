'use strict';

const express = require('express');
const superagent = require('superagent');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

function Category(){
    this._id =_id;
    this.name = name;
    this. display_name = display_name;
    this.description = description;
}
function Product(){
    this._id = id;
    this.category = category;
    this.name = name;
    this.display_name = display_name;
    this.description = description;
}

app.get('/', listContent);

app.get('./gategory/:name', listDetail);

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

function listContent(request, response) {
    response.render('index');
}

function listDetail(request, response) {
    console.log('Load products')
    let url=`http://localhost:3000/category/:name`
    
    superagent.get(url)
        .then(results => results.map(product => new Product(productResults)))
        .then(response.render('./category/:name',{searchResults: results}));
}