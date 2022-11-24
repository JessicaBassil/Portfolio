import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';

import { projects } from '../data.js';

const projectRouter = express.Router();

projectRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
    await Project.remove({});
    const createdProjects = await Project.insertMany(projects)
    res.send({createdProjects});
}))

projectRouter.get('/', expressAsyncHandler(async(req,res)=>{
    try{
        const projects = await Project.find({});
        res.send(projects);
    }catch(error){
        res.send(error);
    }
}));

projectRouter.get('/:id', expressAsyncHandler(async(req,res)=>{
    const project = await Project.findById(req.params.id);
    if(project){
        res.send(project);
    } else {
        res.status.send({message: 'Project Not Found'})
    }
}));

export default projectRouter;