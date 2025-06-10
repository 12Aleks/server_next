import * as Joi from 'joi';

export const validationSchema = Joi.object({
    API_USERNAME: Joi.string().required(),
    API_PASSWORD: Joi.string().required(),
    API_DB: Joi.string().required(),
    CLIENT_URL: Joi.string().required()
});