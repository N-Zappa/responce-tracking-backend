import { VacancyResponseDTO } from "./create-vacancy-response.dto";

export type UpdateVacancyResponseDTO = Partial<VacancyResponseDTO> & {
  status?: "RESUME_NOT_VIEWED" | "RESUME_VIEWED" | "INVITATION" | "REJECT";
};
