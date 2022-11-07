import express from 'express';
import mongoose from 'mongoose';
import projectRouter from './routers/projectRouter.js';

const app = express();
mongoose.connect('mongodb://localhost/Portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/api/projects', projectRouter)

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
