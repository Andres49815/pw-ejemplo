import { UserWithId } from "./user.interface";
import UserModel from "./user.model";

export class UserRepository {
  public constructor(
    private readonly _userModel = UserModel,
  ) { }

  public async createUser(user: UserWithId): Promise<UserWithId> {
    const created = await this._userModel.create(user);
    return created as UserWithId;
  }

  public async getUserById(userId: string): Promise<UserWithId | null> {
    const user = await this._userModel.findOne({ id: userId }).lean().exec();
    return user as UserWithId;
  }

  public async getUsers(): Promise<UserWithId[]> {
    return this._userModel.find().lean().exec();
  }
}
