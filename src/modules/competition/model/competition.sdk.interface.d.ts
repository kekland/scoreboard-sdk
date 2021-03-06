import { Model, DatabaseModel } from '../../../database/model.class';
import { CompetitionStatus } from './competitionStatus.enum';
import { IPaginationStub } from '../../../shared/model/pagination.model';
import { IDatePair } from '../../../shared/model/shared.sdk.interface';
import { IJudge } from '../../judge/model/judge.sdk.interface';
import { ICompetitor } from '../../competitor/model/competitor.sdk.interface';
import { ICompetitionNews } from '../../news/model/news.sdk.interface';
export interface ICompetition extends DatabaseModel {
    title: string;
    subject: string;
    grade: string;
    date: IDatePair;
    rounds: number;
    competitors: ICompetitor[];
    judges: IJudge[];
    news: ICompetitionNews[];
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
    news: IPaginationStub;
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
    news: IPaginationStub;
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
