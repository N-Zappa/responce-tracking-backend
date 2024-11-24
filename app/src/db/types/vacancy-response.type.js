"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyResponseType = void 0;
const joi_1 = __importDefault(require("joi"));
exports.VacancyResponseType = joi_1.default.object({
    company: joi_1.default.string().required(),
    vacancy: joi_1.default.string().required(),
    min_salary: joi_1.default.number().integer().min(0).required(),
    max_salary: joi_1.default.number().integer().min(0).required(),
    status: joi_1.default.string()
        .valid("RESUME_NOT_VIEWED", "RESUME_VIEWED", "INVITATION", "REJECT")
        .default("RESUME_NOT_VIEWED"),
    note: joi_1.default.string().required(),
});
