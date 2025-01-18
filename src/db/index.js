
// see that type error is showing so i am going to fork another project and then i will see and resolve okiiii


import mongoose from "mongoose" ;
import {DB_NAME} from "../constants.js";

//yaha pai humne ek fn bana kai usko export kar daigai hum

const connectDB = async () => {
    try { // connectionInstance kai andar response a rha hai kie connection honai kai bad jo bhi responses ko hum hold kar sktai hai yaha pai
        const ConnectionInstance = await mongoose.connect`${process.env.MONGODB_URI}
        /${DB_NAME}`
        console.log(`\n MongoDB connected !! 
            DB HOST: ${ConnectionInstance.connection.host}`);
            // connection instance kai agai humai object milai hai further jo kie hai connection.host
            // toh apka pura mongo db ka url hai jaha pai connection ho rha hai wo lailai 
    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1)       // process kya hai kie yeh jo humari current application chal rhi hai na yeh 1 na 1 process pai chal rhi hogi na yeh uska refrence hai  
    }
}

export default connectDB
// toh db ban gaya hai aur connection bhi import ho gaya hai
// ab hum isko import kar laigai src kai index.js mai 

