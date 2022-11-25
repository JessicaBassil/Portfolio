import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';

const messageRouter = express.Router();

messageRouter.post('/', expressAsyncHandler(async(req,res)=>{
    try{
        const message = new Message({
            fullname: req.body.fullname,
            email: req.body.email,
            description: req.body.description,
        })

        const createdMessage = await message.save();
        res.send({message: 'Message Created', object: createdMessage});
    } catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}))

export default messageRouter