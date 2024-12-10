import express from "express";

const app = express();

const PORT = 5001;


app.use(express.json()); // 1st


app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

app.get("/api",(req,res)=>{
    try {
        let person = {
            name:"suhail",
            age:22,
            isAlive:true
        }
        res.status(200).json(person)
    } catch (error) {
        console.log(error);
        
    }
})


app.post("/register",(req,res)=>{
    try {

        let userInput = req.body; /// 2nd
        // console.log(userInput);
        res.status(200).json(userInput)

        
        
    } catch (error) {
        console.log(error);
        
    }
})

app.get("/test",(req,res)=>{
    try {
        let userData = req.body;       
       console.log(userData);

        console.log(req.hostname);
        console.log(req.ip,req.ips);
        console.log(req.method);

        res.status(404).json({msg:"done hogaya"})
    
        
        
        
        
        
    } catch (error) {
        console.log(error);
        
    }
})




app.listen(PORT, () => {
  console.log(`Server is up and Running at ${PORT}`);
});


