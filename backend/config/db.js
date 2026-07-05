import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://bsse2380273_db:Szabist.123@cluster0.gsexxhs.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}
