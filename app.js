const express = require("express");
const mongoose = require("mongoose");
const data_router = require("./router/data_router");

const app = express();

app.use(express.json());


app.use("/", data_router);
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;

