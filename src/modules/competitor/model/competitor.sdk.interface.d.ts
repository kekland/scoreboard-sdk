import { CompetitorResult } from '../../competition/model/result.model';
import { IName } from '../../../shared/model/shared.sdk.interface';
export interface ICompetitor {
    id: string;
    name: IName;
    location: string;
    cypherToken: string;
    result: CompetitorResult;
    competitionId: string;
}
export interface ICompetitorSecure {
    id: string;
    name: IName;
    location: string;
    competitionId: string;
}
export interface ICompetitorWithResultsSecure {
    id: string;
    name: IName;
    location: string;
    result: CompetitorResult;
    competitionId: string;
}
