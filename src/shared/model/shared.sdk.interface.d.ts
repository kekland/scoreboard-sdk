export interface IDatePair {
    start: Date;
    end: Date;
}
export interface IName {
    first: string;
    middle?: string;
    last: string;
}
export interface IPaginationData {
    skip: number;
    take: number;
}
export interface IPaginationResponseObject<T> {
    total: number;
    count: number;
    items: T[];
}
