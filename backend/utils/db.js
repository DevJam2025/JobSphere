import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
<<<<<<< HEAD
        console.log("mongodb connected successfully!");
    } catch(error){
        console.log(error);
=======
        console.log("mongodb connected succesfully!");
    } catch(e){
        console.log(e);
>>>>>>> 74d6175e6f3df7de764122ac92bf40b66085e892
    }
}
export default connectDB;