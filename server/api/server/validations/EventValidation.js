import { body } from 'express-validator';
import { EventPostValidationMessages } from '../messages/EventMessages';

export const EventPostValidations = [
  body('firstName', EventPostValidationMessages.firstName).isString().notEmpty(),
  body('lastName', EventPostValidationMessages.lastName).isString().notEmpty(),
  body('email', EventPostValidationMessages.email).isEmail().notEmpty(),
  body('eventDate', EventPostValidationMessages.eventDate).isString().notEmpty()
];