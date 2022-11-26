import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    github: {type: String, required:false},
    image: {type:String, required: true},
    medias: [{type:String, required:false}],
    description: {type: String, required: true},
},{
    timestamps: true
});

const Project = mongoose.model("Project",projectSchema);
export default Project;
