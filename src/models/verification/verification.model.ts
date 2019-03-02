
export class Verification extends DatabaseModel {
  userId: string;
  imageId: string;

  constructor(user: User, imageId: string) {
    super();
    this.userId = user._id
    this.imageId = imageId
  }
}

