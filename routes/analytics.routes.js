import express from "express";
import { readData, writeData } from "../models/product.model.js";

const route = express.Router();

route.get('/allorders',(req,res)=>{
    const data = readData();
    const total = data.orders.length;
    res.status(200).json({
        list: data.orders
    });

});

route.get('/cancelled-orders',(req,res)=>{
    const data = readData();
    const order = data.orders.filter(el=>el.status === 'cancelled');
    data.orders =order;
    res.status(200).json(data.orders)
});
route.get('/cancelled-orders',(req,res)=>{
    const data = readData();
    const order = data.orders.filter(el=>el.status === 'shipped');
    data.orders =order;
    res.status(200).json(data.orders)
});

route.get('/total-revenue/:productId',(req,res)=>{
    const data=readData();
    const productId = parseInt(req.params.productId);
    const product =[]
    const order = data.orders.filter(el=>el.id === productId && el.status !== "cancelled" );
    data.orders =order;
    totalRevenue = data.orders.reduce((acc,item)=> {return acc + item.quantity},0 )
    
});
export default route;
