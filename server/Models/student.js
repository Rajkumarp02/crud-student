import mongoose from'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';



const studentSchema =  mongoose.Schema({
    id:{type:String},
    name:{type:String, required:true},
    sec:{type:String, required:true},
    marks:{type:Number, required:true},
    })



//pagination
studentSchema.plugin(mongoosePaginate);

export default mongoose.model("Student",studentSchema)