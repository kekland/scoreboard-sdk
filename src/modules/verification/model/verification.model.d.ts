import { DatabaseModel, Model } from '../../../database/model.class';
export declare class Verification extends DatabaseModel {
    userId: string;
    imagePath: string;
    constructor(userId: string, imageId: string);
}
export declare class VerificationDetailed extends Model {
    userId: string;
    imagePath: string;
    constructor(data: Verification);
}
