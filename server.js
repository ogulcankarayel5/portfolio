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
app.use(cors());
app.use("/api",router);
app.use(customErrorHandler);

if(process.env.NODE_ENV === 'production') {
    app.get('/',(req,res) => {
        app.use(express.static(path.resolve(__dirname,"client","build")))
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
   
}
app.listen(PORT,() => {
    console.log(`App started on ${PORT}`);
});