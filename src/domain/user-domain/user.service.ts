import { generateUUID } from "../../utils";
import { InsertableUser, UserWithId } from "./user.interface";
import { UserRepository } from "./user.repository";

export class UserService {
  public constructor(
    private readonly _userRepository: UserRepository,
  )
  { }

  public async getAllUsers(): Promise<UserWithId[]> {
    return this._userRepository.getUsers();
  }

  public async createUser(user: InsertableUser): Promise<UserWithId> {
    const userWithId: UserWithId = {
      id: generateUUID(),
      name: user.name,
      email: user.email,
      photo: user.photo,
    };

    await this._userRepository.createUser(userWithId);
    return userWithId;
  }

  public async getUserById(id: string): Promise<UserWithId> {
    const user = await this._userRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

} 
