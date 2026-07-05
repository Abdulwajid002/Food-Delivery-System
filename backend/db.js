import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://bsse2380273_db:Szabist.123@cluster0.gsexxhs.mongodb.net/SzabistFood";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected Successfully");

    const foodItemsCollection =
      mongoose.connection.db.collection("FoodItems");
    const foodCategoryCollection =
      mongoose.connection.db.collection("FoodCategory");

    global.FoodItem = await foodItemsCollection.find({}).toArray();
    global.foodCategory = await foodCategoryCollection.find({}).toArray();

    console.log("FoodItems:", global.FoodItem.length);
    console.log("FoodCategory:", global.foodCategory.length);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
};

export default mongoDb;
