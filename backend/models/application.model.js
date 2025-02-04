import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job', // setting up relationship between job and application
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending',
    }
},{ timestamps: true });

// Add indexing to ensure unique applications for the same job by the same user
applicationSchema.index({ job: 1, applicant: 1 }, { unique: true });
export const Application  = mongoose.model("Application", applicationSchema);
