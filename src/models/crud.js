import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true  
    },
    description: { 
        type: String, 
        required: true  
    }
}, { timestamps: true });

const Crud = mongoose.model('Crud', schema);

export default Crud;
    