"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const vacancy_response_service_1 = require("./vacancy-response.service");
exports.router = express_1.default.Router();
exports.router.post("/create", (req, res) => {
    const createVacancyResponseDto = req.body;
    (0, vacancy_response_service_1.createVacancyResponse)(req, res, createVacancyResponseDto);
});
exports.router.patch("/update/:id", (req, res) => {
    const updateVacancyResponseDto = req.body;
    const vacancyId = req.params.id;
    (0, vacancy_response_service_1.updateVacancyResponse)(req, res, vacancyId, updateVacancyResponseDto);
});
exports.router.delete("/:id", (req, res) => {
    const vacancyId = req.params.id;
    (0, vacancy_response_service_1.deleteVacancyResponse)(req, res, vacancyId);
});
exports.router.get("/all", (req, res) => {
    (0, vacancy_response_service_1.getAllVacancyResponses)(req, res);
});
