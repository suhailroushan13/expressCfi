import express from "express";

const app = express();

const PORT = 5001;

// it has 2 parameters 1st "routing" 2nd arrow function
// app.get()
// req : you getting from client
// res : you sending to client
// client can be : browser,postman
// / === 192.168.68.54:5000
// /suhail == 192.168.68.54:5000/suhail

app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

app.get("/end", (req, res) => {
  try {
    res.end("hello"); // 1 way
  } catch (error) {
    console.log(error);
  }
});

app.get("/send", (req, res) => {
  try {
    res.send("<h1>  Hello </h1>"); // 2 way
  } catch (error) {
    console.log(error);
  }
});

app.get("/download", (req, res) => {
  try {
    res.download("./wallpaper.jpg"); // 2 way
  } catch (error) {
    console.log(error);
  }
});

let person = {
  name: "Suhail",
  age: 22,
  isAlive: true,
};

app.get("/json", (req, res) => {
  try {
    res.json(person); // 2 way
  } catch (error) {
    console.log(error);
  }
});


app.get("/suhail", (req, res) => {
    try {
      res.redirect("https://google.com"); // 2 way
    } catch (error) {
      console.log(error);
    }
  });

app.get("/status", (req, res) => {
  try {
    res.status(404).end("Not found");
    // res.status(200).send("hello send");
    // res.status(404).json(person);
    // res.status(200).download("./wallpaper.jpg");
  } catch (error) {
    res.status(500).json({ err: "Error hai" });
    console.log(error);
  }
});

// it accpets 2 params
// 1st is port number
// 2nd is arrow function
app.listen(PORT, () => {
  console.log(`Server is Up and Running AT ${PORT}`);
});
