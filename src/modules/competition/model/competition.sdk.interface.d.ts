import { Competitor } from '../../competitor/model/competitor.model';
import { Judge } from '../../judge/model/judge.model';
import { Model, DatabaseModel } from '../../../database/model.class';
import { CompetitionStatus } from './competitionStatus.enum';
import { IPaginationStub } from '../../../shared/model/pagination.model';
import { IDatePair } from '../../../shared/model/shared.sdk.interface';
export interface ICompetition extends DatabaseModel {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
    competitors: Competitor[];
    judges: Judge[];
    organizerId: string;
    status: CompetitionStatus;
}
export interface ICompetitionDetailed extends Model {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
    competitors: IPaginationStub;
    judges: IPaginationStub;
    organizerId: string;
    status: CompetitionStatus;
}
export interface ICompetitionSecure extends Model {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
    competitors: IPaginationStub;
    judges: IPaginationStub;
    organizerId: string;
    status: CompetitionStatus;
}
export interface ICompetitionMinimalSecure extends Model {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
    organizerId: string;
    status: CompetitionStatus;
}
