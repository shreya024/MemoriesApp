import mongoose from "mongoose";


const getBookMarkModel = (UserId)=>{
    const bookMarkSchema = new mongoose.Schema({
        PostId:{type:String, required:true}
    });
    
    return mongoose.model(`BMS-${UserId}`,bookMarkSchema);
}


export default getBookMarkModel;