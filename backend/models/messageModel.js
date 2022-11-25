import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    description: {type: String, required: true},
},{
    timestamps: true
});

const Message = mongoose.model("Message",messageSchema);
export default Message;
