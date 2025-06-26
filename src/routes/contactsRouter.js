import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  patchContactController,
  deleteContactController,
} from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createStudentController } from '../controllers/contactsController.js';

const contactsRouter = express.Router();
contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));
contactsRouter.post('/', ctrlWrapper(createStudentController));
contactsRouter.patch('/:contactId', ctrlWrapper(patchContactController));
contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
