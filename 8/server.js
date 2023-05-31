// import set up
const express = require ('express');
const path = require('path');
const app = express ();
const bodyparser = require('body-parser');
const mysql = require('./DB/DB');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//routing
app.get('/', (req, res)=>{
//res.send("hi day 8!!!");
res.sendFile(path.join(__dirname,"views/page4.html"))
});
app.get('/formHandler', (req,res)=>{
    //res.send(req.query);
    //validate info exist
   
    //pull info
    const NewSignUp= {
       email:req.query.UserEmail , 
       name:req.query.UserName
};
    //run insert query
    const Q1 = "INSERT INTO SignUps SET?";
    Sql.query(Q1, NewSignUp, (err, mysqlres)=>{
if (err) {
    console.log(err);
    res.send("somthing went wrong!");
    return;
}
res.send("Thank You!");
return;
    });
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
