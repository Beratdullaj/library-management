import Joi from 'joi';

const updatedNewsSchema = Joi.object({
    _id: Joi.string().required(),
    title: Joi.string(),
    author:Joi.string(),
    description: Joi.string(),

});

export default updatedNewsSchema;