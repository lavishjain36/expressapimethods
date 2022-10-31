const express=require("express");
const app=express();
const cors=require("cors");
const PORT=process.env.PORT||4000;
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(cors());

let details=[
    {
        id:1,
        name:"Mahesh",
        email:"mahesh@gmail.com",

    },
    {
        id:2,
        name:"Ram",
        email:"ram@gmail.com",
    },
    {
        id:3,
        name:"Praveen",
        email:"praveen@gmail.com",

    },
    {
        id:4,
        name:"Jenny",
        email:"jenny@gmail.com",
    }
]

app.get('/',function(req,res){
    res.send(details)
})

app.get("/:id",(req,res)=>{
    let id=req.params.id;
    const data=details.filter(item=>item.id==id);
    //getting the data with id 
    res.send(data);
})


app.post("/",async(req,res)=>{
    details.push(req.body);
    res.send({message:"Data sent successfully"})
})


// Put methods to update the data in node.js 

app.put("/",async(req,res)=>{
    for(let i=0;i<details.length;i++){
        if(req.body.id===details[i].id){
            details[i].name=req.body.name;
            details[i].email=req.body.email;
        }
    }
    res.send({message:"Updated Details Successfully"})
})


app.delete("/:id",async(req,res)=>{
    let index;
    for(let i=0;i<details.length;i++){
        if(req.params.id==details[i].id){
            index=i;
        }
    }
    details.splice(index,1);
    res.send({message:"Deleted"});

})







app.listen(PORT,()=>{
    console.log("App is running on Port",PORT)
})