// t.me/rvgee, wex0god on discord
const express = require("express");
const app = express();
let users = {};

app.set("trust proxy", true);
app.get("/ping", (req, res) => {
    let ip = req.ip || req.connection.remoteAddress;
    users[ip] = Date.now();
    
    let online = 0;
    let now = Date.now();
    for (let key in users) {
        if (now < users[key] + 60000) {
            online++;
        } else {
            delete users[key];
        }
    }
    res.send(online.toString());
});

app.listen(3000);
