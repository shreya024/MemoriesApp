import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import model from "./models/user.model.js";
import postRoutes from "./routes/posts.js";
import session from 'express-session';
import passport from "passport";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use(express.json());
app.use(session({
  secret: "this is a secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

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


app.post('/api/Signup' , (req, res) => {
  model.register(new model({email: req.body.email, username: req.body.username}), req.body.password, function(err, user){
    if(err) {
      console.log(err);
      res.json({status: 'error'})
    } else {
      passport.authenticate("local")(req, res, function() {
        res.json({status: 'ok'});
      })
    }
  })

});

app.post('/api/Login' , async (req, res) => {
  
    const user = new model({
      username: req.body.username,
      password: req.body.password,
    })

    req.logIn(user, function(err) {
      if(err) {
        console.log(err);
        return res.json({status: 'error'})
      } else {
        passport.authenticate("local")(req, res, function() {
          return res.json({status: 'ok'});
        })
      }
    })
    
});
