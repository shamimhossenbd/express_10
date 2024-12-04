import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";
import * as UsersController from "../app/controllers/UsersController.js";
import authMiddlewere from "../app/middlewares/authMiddlewere.js";





router.post("/createTask",authMiddlewere, taskController.createTask);
router.get("/updateTaskStatus",authMiddlewere, taskController.updateTaskStatus);
router.get("/TaskListByStatus",authMiddlewere, taskController.TaskListByStatus);
router.delete("/DeleteTask",authMiddlewere, taskController.DeleteTask);
router.get("/CountTask", taskController.CountTask);

//delete route



//Users routes
router.post("/Registration", UsersController.Registration);
router.post("/login", UsersController.login);
router.get("/ProfileDetails",authMiddlewere, UsersController.ProfileDetails);
router.post("/ProfileUpdate",authMiddlewere, UsersController.ProfileUpdate);
router.get("/EmailVerify", UsersController.EmailVerify);
router.post("/CodeVerify", UsersController.CodeVerify);
router.post("/ResetPassword", UsersController.ResetPassword);

export default router;


