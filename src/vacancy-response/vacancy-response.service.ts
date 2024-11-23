import { Request, Response } from "express";
import { VacancyResponseType } from "../db/types/vacancy-response.type";
import { logger } from "../config/logger";
import { VacancyResponseModel } from "../db/models/varancy-response.model";
import { VacancyResponseDTO } from "./dto/create-vacancy-response.dto";
import { UpdateVacancyResponseDTO } from "./dto/update-vacancy-response.dto";

export const create = async (
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

    const response = await VacancyResponseModel.create(dto);
    return res.json({ response: response });
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ error: `Internal Server Error. Details: ${error}` });
  }
};

export const update = async (
  req: Request,
  res: Response,
  id: string,
  dto: UpdateVacancyResponseDTO
) => {
  try {
    const updatedVacancy = await VacancyResponseModel.findByIdAndUpdate(
      id,
      dto,
      { new: true }
    );
    if (!updatedVacancy) {
      return res.status(404).json({ error: `Vacancy with id ${id} not found` });
    }
    return res.status(200).json({ updatedVacancy });
  } catch (error) {
    logger.error(error);
  }
};
