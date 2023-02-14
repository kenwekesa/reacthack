import exress from "express"


import { getAllTrains, findTrains, getSingleTrain,deleteTrain, createTrain,updateTrain } from "../controllers/TrainController.js"

const router = exress.Router()


router.get('/:id', getSingleTrain)
//router.get('/',getAllTrains)
router.get('/',findTrains)
router.put('/:id', updateTrain)
router.post('/',createTrain)
router.delete('/:id',deleteTrain)
export default router