const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("mongodb connection successful");
  } catch (error) {
    console.log("mongodb connection fail");
    console.log(error);
  }
};

dbConnect();
