import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    
    user: {type:mongoose.Types.ObjectId, ref: "Users", required:true},
    orderDetails: [{
        food: {type:mongoose.Types.ObjectId, ref: "Foods", required:true},
        quantity:{type:Number, required:true},
        paymentmode:{type:String,required:true},
        status: {type:String, default:"placed", required:true},
        paymentDetails:{
            itemTotal:{type:Number,required:true},
            promo:{type:Number,required:true},
            tax: {type:Number,required:true},
        }
    }]

},
        {
            timestamps:true
        }
);

export const OrderModel = mongoose.model("Orders", OrderSchema);
