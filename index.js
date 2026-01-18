import express from "express";
import useAnalytics from './routes/analytics.routes.js'
import useOrder from "./routes/orders.routes.js"
const app =express();

app.use(express.json());

app.use('/orders',useOrder)

app.use('/analytics',useAnalytics)

app.listen(4000,()=>{
    console.log("server is running!")
})