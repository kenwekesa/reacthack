import express from "express";

import { createUser,deleteUser, updateUser, viewUser, viewUsers, getUserByTrain, getUserByDate } from "../controllers/UserController.js";

const router = express.Router()

router.get('/', viewUsers)
router.post('/',createUser)
router.put('/:id',updateUser)
router.get('/:id',viewUser)
router.delete('/:id',deleteUser)


export default router