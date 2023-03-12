import express from 'express'
import { register,login, authenticateUser, authenticateToken } from '../controllers/AuthController.js';

const router = express.Router();

router.get('/', (req, res)=>
{
    res.send("Hellow this is auth endopoint")
})

//router.post('/register', register)
router.post('/login',login)
router.get('/authenticate', authenticateToken, authenticateUser)
export default router