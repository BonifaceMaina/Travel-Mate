import express from 'express';
import { User, validate } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();


router.post('/signup', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this user already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That email is already in use');
    } else {
        // Insert the new user if they do not exist yet
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.send(user);
    }
});


router.post('/signin', async(req, res)=>{

    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let userExists = await User.findOne({ email: req.body.email });
    if (userExists){
        const comparePassword = bcrypt.compareSync(req.body.password, userExists.password);
        if (comparePassword) {
        const token = jwt.sign({
          id: userExists.id,
          email: userExists.email,
        }, 'privateKey');
        req.token = token;
        req.user = userExists;
        res.send(token);
        }
    }
});
 
module.exports = router;