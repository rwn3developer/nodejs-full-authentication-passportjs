const passport = require('passport');

const passportLocal =  require('passport-local').Strategy;

const RegisterTbl = require('../models/registerModel');



passport.use(new passportLocal({
    usernameField : 'email'
},async(email,password,done)=>{
        try{
            let user = await RegisterTbl.findOne({email : email});
            if(!user || user.password != password){
                console.log("Email and Password not match");
                return done(null,false);
            }
            return done(null,user);
        }catch(err){
            console.log(err);
            return false;
        }

}))


module.exports = passport;