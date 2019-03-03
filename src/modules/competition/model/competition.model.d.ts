import { Competitor } from '../../competitor/model/competitor.model';
import { Judge } from '../../judge/model/judge.model';
import { CompetitionCreateRequestObject } from './data/createCompetition';
import { User } from '../../user/model/user.model';
import { DatePair } from '../../../shared/model/datePair.model';
import { Model, DatabaseModel } from '../../../database/model.class';
import { CompetitionStatus } from './competitionStatus.enum';
import { IPaginationStub } from '../../../shared/model/pagination.model';
import { CompetitionNewsObject } from '../../news/model/news.model';
export declare class Competition extends DatabaseModel {
    title: string;
    subject: string;
    grade: string;
    date: DatePair;
    rounds: number;
    competitors: Competitor[];
    judges: Judge[];
    news: CompetitionNewsObject[];
    organizerId: string;
    status: CompetitionStatus;
    constructor(data: CompetitionCreateRequestObject, user: User);
}
export declare class CompetitionDetailed extends Model {
    title: string;
    subject: string;
    grade: string;
    date: DatePair;
    rounds: number;
    competitors: IPaginationStub;
    judges: IPaginationStub;
    news: IPaginationStub;
    organizerId: string;
    status: CompetitionStatus;
    constructor(data: Competition);
}
export declare class CompetitionSecure extends Model {
    title: string;
    subject: string;
    grade: string;
    date: DatePair;
    rounds: number;
    competitors: IPaginationStub;
    judges: IPaginationStub;
    news: IPaginationStub;
    organizerId: string;
    status: CompetitionStatus;
    constructor(data: Competition);
}
export declare class CompetitionMinimalSecure extends Model {
    title: string;
    subject: string;
    grade: string;
    date: DatePair;
    rounds: number;
    organizerId: string;
    status: CompetitionStatus;
    constructor(data: Competition);
}
