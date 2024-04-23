const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      "mongodb+srv://anjeet0306patel:JkOiXOsYTVlgdtia@cluster0.ojspkiw.mongodb.net/blog"
    );
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
