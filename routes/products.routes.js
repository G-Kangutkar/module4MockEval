import express from "express";
import { readData, writeData } from "../models/product.model.js";

const route = express.Router();

route.post('/',(req,res)=>{
    const data = readData();
    const newProduct = {
        id: data.orders.length>0? data.orders[data.orders.length-1].id+1:1,
        productId:req.body.productId,
        quanlity: req.body.quanlity,
        totoalAmount: data.products.price * data.orders.quanlity,
        status : req.body.status,
        createdAt: req.body.date
    }
    data.orders.push(newOrder);
    // const totoalAmount = data.products.price * data.orders.quanlity;
    if(req.body){
        data.products.stock> 0 ? -1 : res.status(400).send("Insufficient stock")
    }
    res.status(201).send("order placed", totoalAmount)
});