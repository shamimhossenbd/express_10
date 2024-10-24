//create a new
export const createTask = async (req, res) => {
    return res.json({ message: 'Task created successfully' });
}
//red a Task creation
export const readTask = async (req, res) => {
    return res.json({ message: 'Task retrieved successfully' });
}

//update a Task

export const updateTask = async (req, res) => {
    return res.json({ message: 'Task updated successfully' });
}

//delete a Task

export const deleteTask = async (req, res) => {
    return res.json({ message: 'Task deleted successfully' });
}






