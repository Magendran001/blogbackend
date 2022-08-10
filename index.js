const express = require("express");
const connect = require("./config/db");
const app = express();
const usercontroller = require("./controller/usercontroller");
const blogcontroller = require("./controller/blogcontroller");
const Admincontroller = require("./controller/admincontroller")
var cors = require('cors')
app.use(cors())

app.use(express.json())

app.use("", usercontroller)
app.use("/blog", blogcontroller)
app.use("/admin", Admincontroller)
app.listen(4329, async (req, res, next) => {
    try {
        await connect
        console.log("listening on port 4329")
    }
    catch (err) {
        console.log(err)
    }
})