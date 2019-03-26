![CF](http://i.imgur.com/7v5ASc8.png) Project
=================================================

## simple-API
### Author: Vanessa
### Links and Resources
* [PR][]
#### Documentation
* [swagger][https://app.swaggerhub.com/apis/401-advanced-js/simple-api/1.0.0-oas3#/]

### Modules
#### `modulename.js`
db.json

##### Exported Values and Methods
command lines:
##### Categories:
* GET `http http://localhost:3000/categories`
* POST `echo '{"name":"Electronics"}' | http :3000/categories`
  POST `echo '{"id":2,"name":"Transportation","display_name":"Vehicle","description":"Means of transportation"}' | http :3000/categories`
* PUT `echo '{"id":1,"name":"Electronics","display_name":"Machine","description":"Things need power"}' | http put :3000/categories/1`
* DELETE `echo '{"id":1,"name":"Electronics","display_name":"Machine","description":"Things need power"}' | http delete :3000/categories/1`


##### Products:
* GET `http http://localhost:3000/products`
* POST `echo '{"name":"TV", "category":"Electronics","display_name":"Sumsung TV", "description":"This is the biggest TV."}' | http :3000/products`
* POST `echo '{"id":2,"category":"Transportation","name":"BMW","display_name":"Car","description":"car easy to drive"}' | http :3000/products`
* PUT `echo '{"id":2,"category":"Transportation","name":"HONDA","display_name":"Car","description":"car easy to drive"}' | http put :3000/products/2`
* DELETE `echo '{"name":"TV", "category":"Electronics","display_name":"Sumsung TV", "description":"This is the biggest TV."}' | http delete :3000/products/1`


### Setup

#### `.env` requirements
* `npm i`

#### Running the app
1. Install json-server globally with `npm i -g json-server` 
2. Start the json-server with `json-server --watch ./db.json`
  
