const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`/Users/lipunsmac/Desktop/Back-end-P1/files`, (err, files) => {
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(error)=>{
    res.redirect('/');
  })
});
app.get("/profile/:username", (req, res) => {
  res.send(`welcome ${req.params.username}`);
});
app.get("/profile/:username/:age", (req, res) => {
  res.send(`welcome ${req.params.username} ${req.params.age}`);
});

app.listen(3000)
