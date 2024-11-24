"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyResponseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const VacancyResponseSchema = new mongoose_1.default.Schema({
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
exports.VacancyResponseModel = mongoose_1.default.model("responces", VacancyResponseSchema);
