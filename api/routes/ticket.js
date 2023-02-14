import express from "express";

import { createTicket,deleteTicket, updateTicket, viewTicket, viewTickets } from "../controllers/TicketController.js";

const router = express.Router()

router.get('/', viewTickets)
router.post('/',createTicket)
router.put('/:id',updateTicket)
router.get('/:id',viewTicket)
router.delete('/:id',deleteTicket)


export default router