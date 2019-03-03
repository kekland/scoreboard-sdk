import { ClassType } from 'class-transformer/ClassTransformer';
import { IPaginationResponseObject, IPaginationData } from '../shared/model/shared.sdk.interface';
export declare const get: <T, I>(url: string, type: ClassType<I>, params?: any, bearer?: string) => Promise<T>;
export declare const getPaginated: <T>(url: string, type: ClassType<T>, params: IPaginationData, bearer?: string) => Promise<IPaginationResponseObject<T>>;
export declare const post: <T, I>(url: string, type: ClassType<I>, body: any, bearer?: string) => Promise<T>;
export declare const put: <T, I>(url: string, type: ClassType<I>, body: any, bearer?: string) => Promise<T>;
export declare const del: <T, I>(url: string, type: ClassType<I>, bearer?: string) => Promise<T>;
export declare enum RequestMethod {
    POST = 0,
    PUT = 1,
    DELETE = 2
}
