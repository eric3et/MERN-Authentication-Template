const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        //timeoutuseNewUrlParser: true,
        //useCreateIndex: 2,
        //useUnifiedTopology: true,
        //useFindAndModify: true
    });

    console.log("MongoDB connected");
}

module.exports = connectDB;