const { log } = require("console");
const express=require("express");
const app=express();
const path=require("path");
var methodOverride = require('method-override')

const { v4: uuidv4 } = require('uuid');

const port =8080;
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

let posts=[
    {
        id:uuidv4(),
        username:"Shuaib Alam",
        content:"Always Belive in God and Yourself! Hardwork,Consistency Gives Success"
    },
    {  
        id:uuidv4(),
        username:"Vishal Sengar",
        content:"God Mode On ! Belive in Jassi Bhai Only Bcz Hardwork,Consistency Gives Success"
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
    
});
app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4(); 
    posts.push({username,content,id});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
    
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
}); // Added missing closing bracket
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})