const fetchUser = require('../utils/index');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function authUser(email){
  try{
    const usr= await fetchUser.authUsr({
      table:'users',
      first: email
    });
    return usr;
  }catch(error) {
    throw new Error(error);
}
}

async function deleteUser(data,userid){
  try{
    const del = await fetchUser.deleteDatafromDatabase({
      table: 'users',
      where: userid,
      column: 'userid',
      payload:{
        userid:data.userid
      }
    });
  return del;
}catch(error) {
  throw new Error(error)
}
}


  async function updateUser(data,userid){
    try{
    const update = await fetchUser.updateToDatabse({
    table: 'users',
    where : userid,
    column: 'userid',
    payload:{
        fullname:data.fullname,     
    password:data.password,
    email:data.email,
    address:data.address,
    smsCode:data.smsCode,
    phone:data.phone    
  }
  });
    return update;
  }catch(error) {
    throw new Error(error)
  }
}
async function getProduct(){
  try {
    const user = await fetchUser.getFromDatabase({
      table: 'products',
      payload:'*'
    });
    return user;
  } catch(error) {
    throw new Error(error);
  }
}

async function createProduct(data) {
    try {
      const result= await fetchUser.saveToDatabase({
        table: 'products',
        payload:{
            imgName:data.imgName,     
        ProductName:data.ProductName,
        price:data.price 
        }
      });
      return result;
    } catch(error) {
      throw new Error(error);
    }
  }

  
  module.exports ={
    createProduct: createProduct,
    getProduct:getProduct
}