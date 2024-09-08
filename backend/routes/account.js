const express = require('express');
const authMiddleware = require('../middleware');
const mongoose = require ('mongoose');
const { Account } = require('../db');
const router = express.Router();

router.get("/balance",authMiddleware,async(req, res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })

    res.status(200).json({
        balance : account.balance
    })
})


router.post("/transfer", authMiddleware, async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    const balance = account.balance;
    if(req.body.amount <0){
        return res.status(401).json({
            message: "Invalid"
        });
    }

    if (!account || balance < req.body.amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({
        userId: req.body.to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Performing transaction
    await Account.updateOne({userId: req.userId}, { $inc: {balance: -req.body.amount}});
    await Account.updateOne({userId: req.body.to}, { $inc: {balance: req.body.amount}});

    res.json({
        message: "Transfer Successful"
    });
});

 module.exports= router; 