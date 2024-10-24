import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";

//create route

router.post("/createTask", taskController.createTask);

//read route

router.get("/readTask", taskController.readTask);

//update route

router.put("/updateTask/:id", taskController.updateTask);

//delete route

router.delete("/deleteTask/:id", taskController.deleteTask);

export default router;


