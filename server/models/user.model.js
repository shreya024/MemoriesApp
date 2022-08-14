import mongoose from 'mongoose';
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const User = new mongoose.Schema(
    {
        email: {type: String, required: true},
        username: {type: String, required: true, unique: true},
    },
    {collection: 'user-data'}
)

User.plugin(passportLocalMongoose);

const model = mongoose.model('UserData', User);

passport.use(model.createStrategy());
passport.serializeUser(model.serializeUser());
passport.deserializeUser(model.deserializeUser());

export default model;
