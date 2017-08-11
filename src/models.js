import Joi from 'joi';

import { getExpirationDate, getUUID } from './helpers/fields';


const FileRef = Joi.object().keys({
  base: Joi
    .string()
    .required(),
  path: Joi
    .string()
    .required(),
  dest: Joi
    .string()
});


const Bundle = {
  id: Joi
    .string()
    .default(getUUID, 'random id'),
  secret: Joi
    .string()
    .default(getUUID, 'random secret'),
  files: Joi
    .array()
    .unique()
    .default([])
    .items(FileRef),
  expirationDate: Joi
    .number()
    .default(getExpirationDate, 'expiration date'),
  filename: Joi
    .string()
}

export default { FileRef, Bundle }
