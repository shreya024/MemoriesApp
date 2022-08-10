import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import model from "./models/user.model.js";
// import postMessage from "./models/postMessage.js";
import postRoutes from "./routes/posts.js";

// const User = require('./models/user.model')
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use(express.json());

//https://www.mongodb.com/cloud/atlas

const COONECTION_URL =" mongodb://localhost:27017/memories"
  // "mongodb+srv://Shreya:x0uxvu6CfgQcSdSq@cluster0.9gqh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(COONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));


app.post('/api/Signup' , async (req, res) => {
  console.log(req.body)
  try {
    await model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({status: 'ok'})
  } catch (err) {
    res.json({status: 'error'})
  }
});
app.post('/api/Login' , async (req, res) => {
  console.log(req.body)
  
    const user = await model.findOne({
      email: req.body.email,
      password: req.body.password,
    })

    if (user) {
      return res.json({status: 'ok'})
    }else {
      res.json({status: 'error'})
    }
  
});

// app.get('/', (req, res) => {
//   res.send("hello world");
// });

