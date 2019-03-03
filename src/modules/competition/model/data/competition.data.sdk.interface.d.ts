import { IDatePair } from '../../../../shared/model/shared.sdk.interface';
import { CompetitionStatus } from '../competitionStatus.enum';
export interface ICompetitionCreateRequestObject {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
}
export interface ICompetitionEditRequestObject {
    title?: string;
    subject?: string;
    grade?: string;
    date?: IDatePair;
}
export interface ICompetitionEditRoundsRequestObject {
    rounds: number;
}
export interface ICompetitionSetStatusRequestObject {
    status: CompetitionStatus;
}
