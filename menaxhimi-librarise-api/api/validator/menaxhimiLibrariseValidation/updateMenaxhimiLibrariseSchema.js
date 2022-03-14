import Joi from 'joi';

const updatedMenaxhimiLibrariseSchema = Joi.object({
    _id: Joi.string().required(),
    type: Joi.string(),
    author:Joi.string(),
    title: Joi.string(),
    page: Joi.number(),
    price: Joi.number(),

});

export default updatedMenaxhimiLibrariseSchema;