import mongoose from "mongoose";

const VacancyResponseSchema = new mongoose.Schema({
  company: { type: String, required: true },
  vacancy: { type: String, required: true },
  min_salary: { type: Number, required: true, integer: true },
  max_salary: { type: Number, required: true, integer: true },
  status: {
    type: String,
    required: true,
    enum: ["RESUME_NOT_VIEWED", "RESUME_VIEWED", "INVITATION", "REJECT"],
    default: "RESUME_NOT_VIEWED",
  },
  note: { type: String, required: true },
});

export const VacancyResponseModel = mongoose.model(
  "responces",
  VacancyResponseSchema
);
