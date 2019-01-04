const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const MongoClient = require('mongodb').MongoClient

let db

app.set("view engine", "pug")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+ "/public")),
MongoClient.connect("mongodb://sandbox:sandbox1@ds141932.mlab.com:41932/studyguide", (err, database) =>{
    if(err) return console.log(err)
    db = database.db("studyguide")
    app.listen(3000, function(){
    console.log('listening on 3000!')
})

})

app.get("/",(req,res) => {
    res.render("index.pug")
})
            app.get("/studyguide",(req,res) => {
                let cursor = db.collection("flashcards").find().toArray((err, results) => {
                   if (err) return console.log(err)
                   console.log(results)
                   res.send(results)
                })
            })
    


app.post("/studyguide", (req,res)=> {
    db.collection("flashcards").save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
})
})

