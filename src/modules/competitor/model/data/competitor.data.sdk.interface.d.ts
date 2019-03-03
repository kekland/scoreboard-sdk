import { IName } from '../../../../shared/model/shared.sdk.interface';
export interface ICompetitorAddRequestObject {
    name: IName;
    location: string;
}
export interface ICompetitorEditRequestObject {
    name?: IName;
    location?: string;
}
export interface ICompetitorSetResultRequestObject {
    result: number[];
}
