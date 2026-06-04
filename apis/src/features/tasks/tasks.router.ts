import express, {type Request, type Response } from "express";
import {listTask, addTask, updatetask, deleteTask, FetchTask, mySelf, sendSSRpage} from "./tasks.controller";
import authCheck from "../../middleware/authCheck";
let router = express.Router();

router.get('/task', authCheck,listTask);
router.get('/task/:id', authCheck, FetchTask);
router.get('/me', authCheck, mySelf)
router.post('/task', authCheck, addTask);
router.put('/task', authCheck, updatetask);
router.delete('/task/:id', authCheck, deleteTask)
router.get('/SSR', sendSSRpage)


export default router;