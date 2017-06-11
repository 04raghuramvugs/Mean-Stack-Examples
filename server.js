var mongodb = require("mongodb");
var express = require("express");
var mongoClient = mongodb.MongoClient;
var app = express();

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/emp1" , function (err,db) {
        var collection = db.collection("e2");
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});

app.listen(8080);
console.log("Server Started on Port No.8080");
