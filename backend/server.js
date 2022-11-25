import express from 'express';
import mongoose from 'mongoose';
import projectRouter from './routers/projectRouter.js';
import messageRouter from './routers/messageRouter.js';
import cors from 'cors';

const app = express();
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

mongoose.connect('mongodb://localhost/Portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json());
app.use('/api/projects', projectRouter)
app.use('/api/messages', messageRouter)

app.get('/', (req,res)=>{
    res.send('Server is ready');
});

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
})
