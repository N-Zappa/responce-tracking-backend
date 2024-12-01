import Joi from "joi";

export const VacancyResponseType = Joi.object({
  company: Joi.string().required(),
  vacancy: Joi.string().required(),
  min_salary: Joi.number().integer().min(0).required(),
  max_salary: Joi.number().integer().min(0).required(),
  status: Joi.string()
    .valid("RESUME_NOT_VIEWED", "RESUME_VIEWED", "INVITATION", "REJECT")
    .default("RESUME_NOT_VIEWED"),
  note: Joi.string().required(),
});
