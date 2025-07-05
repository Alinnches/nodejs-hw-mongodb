import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
    'any.required': 'Name is requiered',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9\s\-()]{7,20}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Phone must be a valid format (digits, spaces, +, -, ())',
      'any.required': 'Phone is required',
    }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().optional().messages({
    'boolean.base': 'isFavourite must be true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .optional()
    .messages({
      'any.only': 'Contact type must be one of: work, home, personal',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
  }),
  phone: Joi.string()
    .pattern(/^\+?[0-9\s\-()]{7,20}$/)
    .messages({
      'string.pattern.base': 'Phone number must be in a valid format',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be true or false',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be one of: work, home, personal',
  }),
});
