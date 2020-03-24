const express = require("express");
const dotenv = require("dotenv");
const path=require("path");
const cors = require('cors');
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/error/customErrorHandler");
const router = require("./routers/index");
const app =express();



//environment variables
dotenv.config();
connectDatabase();

const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());
app.use("/api",router);
app.use(customErrorHandler);
app.listen(PORT,() => {
    console.log(`App started on ${PORT}`);
});