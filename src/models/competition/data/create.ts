import { DatePair } from "../../user/datePair.model";

export interface CompetitionCreateRequestObject {
  title: string;

  subject: string;

  grade: string;

  date: DatePair;

  rounds: number;
}

