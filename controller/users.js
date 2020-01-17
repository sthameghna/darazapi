const userService = require('../service/users');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function authUser(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;
    const result = await userService.authUser(email);
    if (result == undefined) {
        response.json({
            message: "user not found",
            status: 'false'
        })
    }
    else {
        const passwordFromJson = result.password;
        console.log(passwordFromJson)
        if (password == passwordFromJson) {
            response.json({
                status: 'true',
                userid: result.userid,
                name:result.name,
                data: result,
                successful: 'true'
            })
        } else {
            response.json({
                status: 'false',
                successful: 'false'
            })
        }
    }
}

async function  getUser(request,response){
        const result=await userService.getUser();
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

async function createUser(request,response){
    console.log('Im hit')
    const fullname = request.body.fullname;
    const password = request.body.password;
    const email = request.body.email;
    const phone = request.body.phone;
    const smsCode = request.body.smsCode;
    const data = {
        fullname:fullname,
        email:email,
        phone:phone,
        password:password,
        smsCode:smsCode
        
    }    
    try{
        const result=await userService.createUser(data);
        console.log(result)
        if (result=="failed"){
            response.json({
                message:'Email id already registered'
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
            message:'Email id already registered'
        })
    }
}


module.exports ={
    createUser: createUser,
    getUser:getUser,
    authUser:authUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}