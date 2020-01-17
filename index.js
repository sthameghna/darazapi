const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
const cors = require('cors');
var uploadRouter = require('./upload');

const knex = require('knex');
const config = require('./knexfile.js');
var path = require('path');
const dbClient = knex(config);
express.use(bodyParser.json());
express.use(cors());
const userController=require('./controller/users');
const productController=require('./controller/products');

express.use(Express.static(path.join(__dirname, 'public')));
express.use('/upload', uploadRouter);       //Route for uploading image

express.delete('/api/v1/user', userController.deleteUser);
express.put('/api/v1/user', userController.updateUser);
express.get('/api/v1/user', userController.getUser);
express.post('/user/signup', userController.createUser);
express.post('/user/login', userController.authUser);
express.get('/product/list', productController.getProduct);
express.post('/product/list', productController.createProduct);

express.listen(3000,'localhost',()=>{
    console.log("running on port 3000")
})