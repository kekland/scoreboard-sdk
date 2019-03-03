import { Name } from '../../../shared/model/name.model';
import { CompetitorResult } from '../../competition/model/result.model';
export declare class Competitor {
    id: string;
    name: Name;
    location: string;
    cypherToken: string;
    result: CompetitorResult;
    competitionId: string;
    static create(id: string, cypherToken: string, name: Name, competitionId: string, location: string): Competitor;
}
export declare class CompetitorSecure {
    id: string;
    name: Name;
    location: string;
    competitionId: string;
    constructor(data: Competitor);
}
export declare class CompetitorWithResultsSecure {
    id: string;
    name: Name;
    location: string;
    result: CompetitorResult;
    competitionId: string;
    constructor(data: Competitor);
}
