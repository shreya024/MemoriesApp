import mongoose from "mongoose";
const bookMarkSchema = new mongoose.Schema({
    PostId:{type:String, required:true}
});

const getBookMarkModel = (UserId)=>{    
    return mongoose.model(`BMS-${UserId}`,bookMarkSchema);
}


export default getBookMarkModel;