//import and init
const express = require ('express');
const app = express();
const path = require ('path');
const port = 2020;
app.use(express.static(path.join(__dirname, "static")));

//routing 
app.get('/', (req,res)=> {
    console.log('This is the body:     ', req.query);
    res.send("hi express");
});

app.get('/index', (req,res)=> {
    console.log('This is the body:     ', req.query);
    res.sendFile(path.join(__dirname, "views/index.html"));
   // res.send("Thank You!");
});

app.get("/page3", (req, res)=>{
    console.log('This is the body:     ', req.body);
    res.sendFile(path.join(__dirname, "views/page3.html"));
});
app.get("/page4", (req, res)=> {
    console.log('This is the body:     ', req.query);
    res.sendFile(path.join(__dirname, "views/page4.html"));
})

app.get ("/formHandler", (req,res)=> {
    res.send("THANK YOU!");

});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});