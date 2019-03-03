import { ICompetitorEditRequestObject } from '../../modules/competitor/model/data/competitor.data.sdk.interface';
import { ICompetitor } from '../../modules/competitor/model/competitor.sdk.interface';
import { CompetitorResult } from '../../modules/competition/model/result.model';
import { IName } from '../../shared/model/shared.sdk.interface';
export declare class CompetitorModel implements ICompetitor {
    id: string;
    name: IName;
    location: string;
    cypherToken: string;
    result: CompetitorResult;
    competitionId: string;
    editCompetitor(data: ICompetitorEditRequestObject, token: string): Promise<CompetitorModel>;
    deleteCompetitor(token: string): Promise<void>;
}
