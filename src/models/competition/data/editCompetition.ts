import { DatePair } from "../../user/datePair.model";

export interface CompetitionEditRequestObject {
  title?: string;

  subject?: string;

  grade?: string;

  date?: DatePair;
}

