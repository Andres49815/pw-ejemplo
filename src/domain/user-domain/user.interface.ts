

type BaseUser = {
  name: string;
  email: string;
  photo: string;
};

export type UserWithId = BaseUser & { id: string } 
export type InsertableUser = BaseUser;
