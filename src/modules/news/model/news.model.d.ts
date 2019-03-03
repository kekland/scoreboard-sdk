import { Name } from '../../../shared/model/name.model';
import { User } from '../../user/model/user.model';
import { Judge } from '../../judge/model/judge.model';
import { NewsAddRequestObject } from './data/addNews';
export declare class CompetitionNewsObject {
    id: string;
    title: string;
    body: string;
    competitionId: string;
    authorId: string;
    authorName: Name;
    static create(id: string, competitionId: string, data: NewsAddRequestObject, author?: User | Judge): CompetitionNewsObject;
}
