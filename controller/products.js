const productService = require('../service/products');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());


async function  getProduct(request,response){
        const result=await productService.getProduct();
        response.json(
            result
        )
}



async function  deleteUser(request,response){
    const userid = request.body.userid;
 const data={
        userid:request.body.userid
    }
    console.log(userid);
    try{
        const result=await userService.deleteUser(data,userid);
        response.json({
            status:'success',
            message: 'success',
            data:data
        })
    }catch(error){
        response.json({
            message:'fail'
        })
    }
}

async function updateUser(request,response){
    console.log("done");
    const userid = request.body.userid;
    const fullname = request.body.fullname;
    const password = request.body.password;
    const email = request.body.email;
    const phone = request.body.phone;
    const smsCode = request.body.smsCode;
    const data = {
        userid:userid,
        fullname:fullname,
        email:email,
        phone:phone,
        address:address,
        password:password,
        smsCode:smsCode
        
    } 
    try{
        const result=await userService.updateUser(data,userid);
        response.json({
            status:'success',
            message:"success",
            data:data
        })
    }catch(error){
        response.json({
            message:'error'
        })
    }
}

async function createProduct(request,response){
    const imgName = request.body.imgName;
    const ProductName = request.body.ProductName;
    const price = request.body.price;
    const data = {
        imgName:imgName,
        ProductName:ProductName,
        price:price
        
    }    
    try{
        const result=await productService.createProduct(data);
        console.log(result)
        if (result=="failed"){
            response.json({
                message:'Something is wrong'
            })
        }
        else{
        response.json({
            status:'success',
            message:'Successfully Registered',
            data:data
        })}
    }catch(error){
        response.json({
            message:error
        })
    }
}


module.exports ={
    createProduct: createProduct,
    getProduct:getProduct
}