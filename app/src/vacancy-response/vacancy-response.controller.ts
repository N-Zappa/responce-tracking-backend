import express from "express";
import {
  createVacancyResponse,
  deleteVacancyResponse,
  getAllVacancyResponses,
  updateVacancyResponse,
} from "./vacancy-response.service";

export const router = express.Router();

router.post("/create", (req, res) => {
  const createVacancyResponseDto = req.body;
  createVacancyResponse(req, res, createVacancyResponseDto);
});

router.patch("/update/:id", (req, res) => {
  const updateVacancyResponseDto = req.body;
  const vacancyId = req.params.id;
  updateVacancyResponse(req, res, vacancyId, updateVacancyResponseDto);
});

router.delete("/:id", (req, res) => {
  const vacancyId = req.params.id;
  deleteVacancyResponse(req, res, vacancyId);
});

router.get("/all", (req, res) => {
  getAllVacancyResponses(req, res);
});
