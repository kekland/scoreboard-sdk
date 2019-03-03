import { ICompetitionNews } from '../../modules/news/model/news.sdk.interface';
import { IName } from '../../shared/model/shared.sdk.interface';
import { INewsEditRequestObject } from '../../modules/news/model/data/news.data.sdk.interface';
export declare class NewsModel implements ICompetitionNews {
    id: string;
    title: string;
    body: string;
    competitionId: string;
    authorId: string;
    authorName: IName;
    editNews(data: INewsEditRequestObject, token: string): Promise<NewsModel>;
    deleteNews(token: string): Promise<void>;
}
