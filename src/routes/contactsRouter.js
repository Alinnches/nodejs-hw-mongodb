import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  patchContactController,
  createContactController,
  deleteContactController,
} from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get(
  '/',
  ctrlWrapper(getContactsController),
  upload.single('photo'),
);
contactsRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
contactsRouter.post(
  '/',
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
contactsRouter.patch(
  '/:contactId',
  upload.single('photo'),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
contactsRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
