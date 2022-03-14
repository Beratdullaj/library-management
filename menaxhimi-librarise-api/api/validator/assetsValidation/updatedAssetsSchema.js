import Joi from 'joi';

const updatedAssetsSchema = Joi.object({
    _id: Joi.string().required(),
    type: Joi.string(),
    type:Joi.string(),
    price: Joi.number(),

});

export default updatedAssetsSchema;