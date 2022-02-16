import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/Product.js";
import dotenv from "dotenv";
dotenv.config();
 
//Create server
const app = express();
 
//Use Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
 
// Use Router
app.use("/api", productRouter);
 
const CONNECTION_URL = process.env.MONGO_URL;
 //ตัวแปล port มีข้อมูลจะเท่ากับ env ถ้าไม่มี port จะเอา 5000 ขึ้นมาใช้งาน
const PORT = process.env.PORT || 5000;

//Connect to MongDB
mongoose
  .connect(CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 

  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));