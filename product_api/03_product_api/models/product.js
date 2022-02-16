import mongoose from "mongoose";
const Schema = mongoose.Schema ; 

//สร้าง Schema
const productSchema = new Schema ({
    //สร้าง Field
        name:String,
        category: String,
        price: Number,
        tags: [String],
});


//สร้าง model จับคู่เพื่อให้มีโครงสร้างแบบ Schema
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;