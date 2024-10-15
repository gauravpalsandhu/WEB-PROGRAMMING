/*********************************************************************************
*  WEB700 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Gauravpal Singh Sandhu Student ID: 161718234 
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080

var collegeData = require("./collegeData")
var path = require("path")
var express = require("express")

var app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"))
})

app.get("/htmlDemo", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "htmlDemo.html"))
})

app.get("/students", (req, res) => {
    if (req.query.course) {
        collegeData.getStudentsByCourse(req.query.course)
            .then(data => res.json(data))
            .catch(err => res.json({ message: err }))
    } else {
        collegeData.getAllStudents()
            .then(data => res.json(data))
            .catch(err => res.json({ message: err }))
    }
})

app.get("/student/:num", (req, res) => {
    collegeData.getStudentByNum(req.params.num)
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }))
})

// New route for TAs
app.get("/tas", (req, res) => {
    collegeData.getAllTAs()
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }))
})

app.get("/courses", (req, res) => {
    collegeData.getAllCourses()
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }))
})


app.listen(HTTP_PORT, () => {
    console.log("Server listening on " + HTTP_PORT)
})
