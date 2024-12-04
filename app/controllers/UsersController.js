import UsersModel from "../model/UsersModel.js";
import { EncodeToken } from "../utility/tokenUtility.js";


export const Registration = async (req, res) => {
    try {
       let reqBody = req.body;
       await UsersModel.create(reqBody);
    return res.json({ status: "success", "message": "User registration  successfully "});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", "message": "Internal Server Error" });
        
    }
    

}
export const login = async (req, res) => {
    try {
        let reqBody = req.body;
        let user = await UsersModel.findOne(reqBody);
        if (user===null) {
            return res.status(404).json({ status: "error", "message": "User not found" });
        }
        else {
             let token = EncodeToken( user['email'],user['_id']);
             return res.json({ status: "success",Token:token, "message": "User login was successful" });
        }
       
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", "message": "Internal Server Error" });
        
    }
    

}
export const ProfileDetails = async (req, res, next) => {
    try {
    let user_id = req.headers['user_id'];
    let data = await UsersModel.findOne({ "_id": user_id });
    return res.json({ status: "success", "message": "User ProfileDetails was successfully ",data: data, });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", "message": "Internal Server Error" });
        
    }
    

}
export const ProfileUpdate = async (req, res) => {
    try {
        let reqBody = req.body;
        let user_id = req.headers['user_id'];
        await UsersModel.updateOne({ "_id": user_id }, reqBody);
        return res.json({ status: "success", "message": "User Profile updated successfully" });
       
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", "message": "Internal Server Error" });
        
    }
    
    

}
export const EmailVerify = async (req, res, next) => {
    
    return res.json({ status: "success", "message": "User registration was successfully registered"});

}
export const CodeVerify = async (req, res, next) => {
    
    return res.json({ status: "success", "message": "User registration was successfully registered"});

}
export const ResetPassword = async (req, res, next) => {
    
    return res.json({ status: "success", "message": "User registration was successfully registered"});

}