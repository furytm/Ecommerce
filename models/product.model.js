import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type:String,

    },

    quantity: {
        type: Number,
        
    },
    productImg:{
        type: String,
    },
    
    
},
{timestamps: true});

export default mongoose.model("Product", productSchema);