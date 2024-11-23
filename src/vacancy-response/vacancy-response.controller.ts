import express from "express";
import { create } from "./vacancy-response.service";

export const router = express.Router();

router.post("/create", (req, res) => {
  const createVacancyResponseDto = req.body;
  create(req, res, createVacancyResponseDto);
});
