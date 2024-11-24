"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVacancyResponses = exports.deleteVacancyResponse = exports.updateVacancyResponse = exports.createVacancyResponse = void 0;
const vacancy_response_type_1 = require("../db/types/vacancy-response.type");
const logger_1 = require("../config/logger");
const varancy_response_model_1 = require("../db/models/varancy-response.model");
const createVacancyResponse = (req, res, dto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = vacancy_response_type_1.VacancyResponseType.validate(dto);
        if (error) {
            logger_1.logger.error(error);
            return res.status(400).json({ error: error.message });
        }
        if (Number(dto.min_salary) > Number(dto.max_salary)) {
            return res.status(400).json({ error: "Incorrect salary fork" });
        }
        const vacancyResponse = yield varancy_response_model_1.VacancyResponseModel.create(dto);
        return res.json(vacancyResponse);
    }
    catch (error) {
        logger_1.logger.error(error);
        return res
            .status(500)
            .json({ error: `Internal Server Error. Details: ${error}` });
    }
});
exports.createVacancyResponse = createVacancyResponse;
const updateVacancyResponse = (req, res, id, dto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (dto.min_salary &&
            dto.max_salary &&
            Number(dto.min_salary) > Number(dto.max_salary)) {
            return res.status(400).json({ error: "Incorrect salary fork" });
        }
        const validStatuses = [
            "RESUME_NOT_VIEWED",
            "RESUME_VIEWED",
            "INVITATION",
            "REJECT",
        ];
        if (dto.status && !validStatuses.includes(dto.status)) {
            return res.status(400).json({ error: `Incorrect status` });
        }
        const updatedVacancyResponse = yield varancy_response_model_1.VacancyResponseModel.findByIdAndUpdate(id, dto, { new: true });
        if (!updatedVacancyResponse) {
            return res.status(404).json({ error: `Vacancy with id ${id} not found` });
        }
        return res.status(200).json(updatedVacancyResponse);
    }
    catch (error) {
        logger_1.logger.error(error);
        return res
            .status(500)
            .json({ error: `Internal Server Error. Details: ${error}` });
    }
});
exports.updateVacancyResponse = updateVacancyResponse;
const deleteVacancyResponse = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedVacancyResponse = yield varancy_response_model_1.VacancyResponseModel.findByIdAndDelete(id);
        if (!deletedVacancyResponse) {
            return res.status(404).json({ error: `Vacancy with id ${id} not found` });
        }
        return res.status(200).json(deletedVacancyResponse);
    }
    catch (error) {
        logger_1.logger.error(error);
        return res
            .status(500)
            .json({ error: `Internal Server Error. Details: ${error}` });
    }
});
exports.deleteVacancyResponse = deleteVacancyResponse;
const getAllVacancyResponses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responses = yield varancy_response_model_1.VacancyResponseModel.find();
        return res.status(200).json(responses);
    }
    catch (error) {
        logger_1.logger.error(error);
        return res
            .status(500)
            .json({ error: `Internal Server Error. Details: ${error}` });
    }
});
exports.getAllVacancyResponses = getAllVacancyResponses;
