import mongoose from "mongoose"


const ReviewSchema = new mongoose.Schema({
    
    user: {type:mongoose.Types.ObjectId, ref: "Users", required:true},
    food:{type:mongoose.Types.ObjectId, ref: "Foods", required:true},
    restaurent:{type:mongoose.Types.ObjectId, ref: "Restaurent", required:true},
    rating:{type:Number, required:true},
    isRestaurentReview:Boolean,
    isFoodReview:Boolean,
    photos:
    [
    
            {type:mongoose.Types.ObjectId, ref: "Images", required:true},
    ],


},
        {
            timestamps:true
        }
);

export const ReviewModel = mongoose.model("Reviews", OrderSchema);
