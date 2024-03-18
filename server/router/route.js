import { Router } from "express";
const router = Router();


/** Import all controllers */
import * as controller from '../controllers/appController.js';

/** POST Methods */
router.route('/register').post(controller.register); //register user
// router.route('/registerMail').post();  //send the email
router.route('/authenticate').post((req, res) => res.send());  //authenticate user
router.route('/login').post(controller.login); //login in app 

/** GET Methods */
router.route('/user/:username').get(controller.getUser);  //user with username
router.route('/generateOTP').get(controller.generateOTP);  //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP); //verify generate OTP
router.route('/createResetSession').get(controller.createResetSession);  //reset all the variables

/** Put Methods */
router.route('/updateUser').put(controller.updateUser);  //is use to update the user profile
router.route('/resetPassword').put(controller.resetPassword);  //use to reset password


export default router;