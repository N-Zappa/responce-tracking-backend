import { Request, Response } from "express";
import { VacancyResponseType } from "../db/types/vacancy-response.type";
import { logger } from "../config/logger";
import { VacancyResponseModel } from "../db/models/varancy-response.model";
import { VacancyResponseDTO } from "./dto/create-vacancy-response.dto";
import { UpdateVacancyResponseDTO } from "./dto/update-vacancy-response.dto";

export const createVacancyResponse = async (
  req: Request,
  res: Response,
  dto: VacancyResponseDTO
) => {
  try {
    const { error } = VacancyResponseType.validate(dto);
    if (error) {
      logger.error(error);
      return res.status(400).json({ error: error.message });
    }
    if (dto.min_salary > dto.max_salary) {
      return res.status(400).json({ error: "Incorrect salary fork" });
    }

    const vacancyResponse = await VacancyResponseModel.create(dto);
    return res.json(vacancyResponse);
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ error: `Internal Server Error. Details: ${error}` });
  }
};

export const updateVacancyResponse = async (
  req: Request,
  res: Response,
  id: string,
  dto: UpdateVacancyResponseDTO
) => {
  try {
    if (dto.min_salary && dto.max_salary && dto.min_salary > dto.max_salary) {
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
    const updatedVacancyResponse = await VacancyResponseModel.findByIdAndUpdate(
      id,
      dto,
      { new: true }
    );
    if (!updatedVacancyResponse) {
      return res.status(404).json({ error: `Vacancy with id ${id} not found` });
    }
    return res.status(200).json(updatedVacancyResponse);
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ error: `Internal Server Error. Details: ${error}` });
  }
};

export const deleteVacancyResponse = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const deletedVacancyResponse = await VacancyResponseModel.findByIdAndDelete(
      id
    );
    if (!deletedVacancyResponse) {
      return res.status(404).json({ error: `Vacancy with id ${id} not found` });
    }
    return res.status(200).json(deletedVacancyResponse);
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ error: `Internal Server Error. Details: ${error}` });
  }
};

export const getAllVacancyResponses = async (req: Request, res: Response) => {
  try {
    const responses = await VacancyResponseModel.find();
    return res.status(200).json(responses);
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ error: `Internal Server Error. Details: ${error}` });
  }
};
