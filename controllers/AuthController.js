const RegisterModel = require('../models/registerModel')

const login = (req,res) => {
    return res.render('index');
}

const register = (req,res) =>{
    return res.render('register');

}

const registerUser = async(req,res) =>{
    try{
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let city = req.body.city;
        let phone = req.body.phone;

        if(!name || !email || !password || !city || !phone){
            console.log(`All field are required`);
            return res.redirect('back');
        }

        //record insert
        let user = await  RegisterModel.create({
            name : name,
            email : email,
            password : password,
            city : city,
            phone : phone
        })
        if(user){
            console.log(`user register`);
            return res.redirect('/');
        }else{
            console.log(`user not register`);
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const loginUser = (req,res) => {
    return res.redirect('/dashboard')
}

const dash = (req,res) => {
    return res.render('dashboard')
}

module.exports = {
    login,register,registerUser,loginUser,dash
};