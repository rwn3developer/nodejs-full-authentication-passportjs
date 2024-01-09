const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const RegisterTbl = require('../models/registerModel');


passport.use(new passportLocal({
    usernameField : 'email'
},async(email,password,done)=>{
    try{
       const user = await RegisterTbl.findOne({email : email});
        if(!user || user.password != password){
            console.log("Email and password not valid");
            return done(null,false)
        }
        return done(null,user)
    }catch(err){
        console.log(err);
        return false;
    }
}))

passport.serializeUser((user,done)=>{
    return done(null,user._id);
})

passport.deserializeUser(async(id,done)=>{
        try{
            const user = await RegisterTbl.findById(id);
            console.log(user);
            return done(null,user);
        }catch(err){
            return done(null,false)
        }
})

passport.checkUser = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/'); 
}

module.exports = passport;