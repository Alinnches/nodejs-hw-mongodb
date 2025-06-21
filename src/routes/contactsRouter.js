import express from 'express';
import {
  getContactsController,
  getContactByIdController,
} from '../controllers/contactsController.js';

const contactsRouter = express.Router();
contactsRouter.get('/', getContactsController);
contactsRouter.get('/', getContactByIdController);

export default contactsRouter;
