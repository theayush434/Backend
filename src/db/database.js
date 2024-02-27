// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async()=>{
//      try{
//  const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//  console.log(`\n MongoDB connected !! DB HOST ${connectionInstance.connection.host} `)
//      }
//      catch(error){
//           console.log("MONOGODB conect failed " ,error)
//           process.exit(1)
//      }
// }
// export default connectDB
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: DB_NAME,
    });
    console.log(`\n MongoDB connected !! DB HOST ${connectionInstance.connection.host} `);
  } catch (error) {
    console.log("MONOGODB connect failed ", error);
    process.exit(1);
  }
};

export default connectDB;