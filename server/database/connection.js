// const mongoDB = "mongodb+srv://prasadvinnakota6:Nanaji3011@cluster0.lxyse.mongodb.net/zomato?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => console.log("Connection Successful"));

// import mongoose from "mongoose";

// export default async()=>
// {
//    return mongoose.connect("mongodb+srv://prasadvinnakota6:Nanaji3011@cluster0.lxyse.mongodb.net/zomato?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then( () => console.log("Connection Successful"));
// };

import mongoose from "mongoose";

export default async()=>
{
   return mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => console.log("Connection Successful"));
};