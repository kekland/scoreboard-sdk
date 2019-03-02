import { DatePair } from "../user/datePair.model";
import { Competitor, CompetitorSecure, CompetitorWithResultsSecure } from "../competitor/competitor.model";
import { Judge, JudgeSecure } from "../judge/judge.model";
import { CompetitionStatus } from "./competitionStatus.enum";
import { DatabaseModel, Model } from "../database/model.class";

export class Competition extends DatabaseModel {
  title: string;

  subject: string;
  grade: string;

  date: DatePair;

  rounds: number;

  competitors: Competitor[];
  judges: Judge[];

  organizerId: string;

  status: CompetitionStatus;
}

export class CompetitionSecure extends Model {
  title: string;

  subject: string;
  grade: string;

  date: DatePair;
  rounds: number;

  competitors: CompetitorSecure[];

  judges: JudgeSecure[];

  organizerId: string;

  status: CompetitionStatus;
}

export class CompetitionWithResultsSecure extends Model {
  title: string;

  subject: string;
  grade: string;

  date: DatePair;
  rounds: number;

  competitors: CompetitorWithResultsSecure[];

  judges: JudgeSecure[];

  organizerId: string;

  status: CompetitionStatus;
}

export class CompetitionMinimalSecure extends Model {
  title: string;

  subject: string;
  grade: string;

  date: DatePair;
  rounds: number;
  organizerId: string;

  status: CompetitionStatus;
}

