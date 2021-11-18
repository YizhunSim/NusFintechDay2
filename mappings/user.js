const express = require("express");
const database = require("../data.js");

let router = express.Router();

router.get("/user/all", (request, response)=>{
    let users = database.get_all_users();

    response.status(200).send(users);
});

router.get("/user/by-id", (request, response)=>{
    if(!request.query.user_id){
        console.log("Received Invalid User_id: "+ request.query.user_id);
        response.status(400).send("Received invalid user_id");
    }else{
        let users = database.get_user_by_user_id(request.query.user_id);
        if (users){
             response.status(200).send(users);
        } else{
            response.status(404).send("User not found!");
        }
    }
});

router.post("/user/add", (request, response) =>{
    let user = request.body;
    database.add_user(user);
    response.status(200).send("User added to the database!");
})

module.exports = { router };