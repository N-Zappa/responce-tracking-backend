import express from "express";
import { create, update } from "./vacancy-response.service";

export const router = express.Router();

router.post("/create", (req, res) => {
  const createVacancyResponseDto = req.body;
  create(req, res, createVacancyResponseDto);
});

router.patch("/update/:id", (req, res) => {
  const updateVacancyResponseDto = req.body;
  const vacancyId = req.params.id;
  update(req, res, vacancyId, updateVacancyResponseDto);
});
