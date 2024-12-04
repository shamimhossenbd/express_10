//create a new

import TasksModel from "../model/TasksModel.js";

export const createTask = async (req, res) => {
    try {
    let user_id = req.headers['user_id'];
    let reqBody = req.body;
    reqBody.user_id = user_id;
    await TasksModel.create(reqBody);
    return res.json({ message: 'Task created successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
        
    }
    
    
    

    
    
}
//red a Task creation
export const updateTaskStatus = async (req, res) => {
    return res.json({ message: 'Task retrieved successfully' });
}
export const TaskListByStatus = async (req, res) => {
    return res.json({ message: 'Task retrieved successfully' });
}

//update a Task

export const DeleteTask = async (req, res) => {
    return res.json({ message: 'Task updated successfully' });
}

//delete a Task

export const deleteTask = async (req, res) => {
    return res.json({ message: 'Task deleted successfully' });
}
export const CountTask = async (req, res) => {
    return res.json({ message: 'CountTask deleted successfully' });
}






