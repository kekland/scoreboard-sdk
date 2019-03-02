import { Name } from "../shared/name.model";
import { CompetitorResult } from "../competition/result.model";

export class Competitor {
  id: string;
  name: Name;
  location: string;
  cypherToken: string;
  result: CompetitorResult;
}

export class CompetitorSecure {
  id: string;
  name: Name;
  location: string;
}

export class CompetitorWithResultsSecure {
  id: string;
  name: Name;
  location: string;
  result: CompetitorResult;
}

