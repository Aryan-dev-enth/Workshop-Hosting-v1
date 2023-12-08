import express from 'express';
import UserController from '../controllers/UserController.js';
const router =express.Router();

//public routes

router.post("/subscribe/:_workshop_id");
router.post("/ubsubscribe/:workshop_id");


export default router;