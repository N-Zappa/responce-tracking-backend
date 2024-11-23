import Joi from "joi";

export const ResponceType = Joi.object({
  company: Joi.string().required(),
  vacancy: Joi.string().required(),
  min_salary: Joi.number().integer().min(0).required(),
  max_salary: Joi.number().integer().min(0).required(),
  status: Joi.string()
    .required()
    .valid("RESUME_NOT_VIEWED", "RESUME_VIEWED", "INVITATION", "REJECT"),
  note: Joi.string().required(),
});
