const express=require("express");
const cors=require("cors")

const app=express();
app.use(cors())
const port= process.env.port || 3000;

app.get("/",(req,res)=>{
    res.send(`Welcome to the server `);
});

app.get("/name/:name",(req,res)=>{
    const name=req.params.name;
    res.send(`My name is ${name} `);
});


app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);

})
//console.log("A pleasant day to you all, My name is Bla Bla Bla");
