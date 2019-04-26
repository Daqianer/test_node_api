const express = require("express");
const app = express();
app.get("/java",function (req,res) {
    res.json({
        ok:34
    })
})
app.listen(8083,function () {
    console.log("success")
})