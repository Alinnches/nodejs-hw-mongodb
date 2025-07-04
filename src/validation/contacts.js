import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
    'any.required': 'Name is requiered',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  phone: Joi.string()
    .pattern(/^\+?[0-9\s\-()]{7,20}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Phone must be a valid format (digits, spaces, +, -, ())',
      'any.required': 'Phone is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  phone: Joi.string()
    .pattern(/^\+?[0-9\s\-()]{7,20}$/)
    .messages({
      'string.pattern.base':
        'Phone must be a valid format (digits, spaces, +, -, ())',
    }),
});
