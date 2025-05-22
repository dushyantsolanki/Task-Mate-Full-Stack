import express from 'express';
import passport from 'passport';
import { loginWithGithub, loginWithGoogle, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false }),
);
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  loginWithGoogle,
);

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false, failureRedirect: '/login' }),
  loginWithGithub,
);

router.get('/logout', logout);

export default router;
