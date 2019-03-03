import { IName } from '../../../shared/model/shared.sdk.interface';
export interface ICompetitionNews {
    id: string;
    title: string;
    body: string;
    competitionId: string;
    authorId: string;
    authorName: IName;
}
