import express from "express";
import { readData, writeData } from "../models/product.model.js";

const route = express.Router();


route.post('/',(req,res)=>{
    const data = readData();
    const newOrder = {
        id: data.orders.length>0? data.orders[data.orders.length-1].id+1:1,
        productId:data.orders.length>0? data.orders[data.orders.length-1].id+1:1,
        quanlity: req.body.quanlity,
        totoalAmount: data.products.price * data.orders.quanlity,
        status : req.body.status,
        createdAt: Date.now()
    }
    // const totoalAmount = data.products.price * data.orders.quanlity;
    if(req.body.status){
        data.products.stock> 0 ? -1 : res.status(400).send("Insufficient stock")
    }
    res.status(201).send("order placed", totoalAmount)
});

route.get('/',(req,res)=>{
   const data = readData()
    res.status(200).json(data.orders)
});

route.delete("/:orderId",(req,res)=>{
    const data=readData();
    const orderId = parseInt(req.params.orderId);
    const order = data.orders.find(el=>el.id === orderId );
    if(order){
        data.orders.status === "cancelled"
    }
    data.orders = order;
    writeData(data);
    res.status(200).send("order cancelled")
});

route.put("/change-status/:orderId",(req,res)=>{
    const data=readData();
    const orderId = parseInt(req.params.orderId);
    
})