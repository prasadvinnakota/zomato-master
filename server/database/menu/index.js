import mongoose from "mongoose"

const MenuSchema = new mongoose.Schema({
    
    menus : [{name: {type:String,required:true}, items:[{type:mongoose.Types.ObjectId, required:true, ref:"Foods"}]}],
    recommended : [{type:mongoose.Types.ObjectId, ref: "Foods" ,required:true, unique:true}],
    




});

export const MenuModel = mongoose.model("Menu", MenuSchema);
