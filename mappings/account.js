const express = require("express");
const database = require("../data.js");

let router = express.Router();

router.get("/account/all", (request, response)=>{
    let accounts = database.get_all_accounts();

    response.status(200).send(accounts);
});

router.get("/account/by-id", (request, response)=>{
    if (!request.query.account_id){
        console.log("Received invalid account_id: " + request.query.account_id);
        response.status(400).send("Received invalid account_id");
    }else{
        let accounts = database.get_account_by_account_id(request.query.account_id);
        if (accounts) {
            response.status(200).send(accounts);
        }else{
                response.status(404).send("Account not found!");
        }
    }
});

module.exports = { router };