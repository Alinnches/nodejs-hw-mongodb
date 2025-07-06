import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  registerUserController,
  loginUserController,
} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
