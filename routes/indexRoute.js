const express = require('express');

const routes = express.Router();

const authcontroller = require('../controllers/AuthController');

const passport = require('passport');

routes.get('/',authcontroller.login);
routes.get('/register',authcontroller.register);
routes.post('/registerUser',authcontroller.registerUser);
routes.post('/loginUser',passport.authenticate('local',{failureRedirect : '/'}),authcontroller.loginUser);
routes.get('/dashboard',authcontroller.dash);






module.exports = routes;