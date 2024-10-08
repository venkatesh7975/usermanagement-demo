const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mvenky9100:Venkatesh7975@usermanagement.6i05c.mongodb.net/?retryWrites=true&w=majority&appName=USERMANAGEMENT",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
