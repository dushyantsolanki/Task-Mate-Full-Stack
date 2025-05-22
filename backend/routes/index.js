import express from 'express';
import authRoute from './auth.route.js';

const router = express.Router();
// Auth routes
router.use('/auth', authRoute);

export default router;
