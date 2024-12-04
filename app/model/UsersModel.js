import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: 'string', required: true, unique: true },
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    mobile:{type:'string', required: true},
    password: { type: 'string', required: true },
    otp: { type: 'string',  default: 0},
    
},
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model('users', userSchema);


