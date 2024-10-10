import express, { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

const UsersRoute = express.Router();

const userService = new UserService(
  new UserRepository(),
);

UsersRoute.get('/', async (request, response, next) => {
  try {
    const users = await userService.getAllUsers();
    response.status(200).json(users);
  }
  catch (error) {
    response.status(500).json({ message: (error as any).message })
  }
});

UsersRoute.get('/:userId', async (request, response, next) => {
  try {
    const user = await userService.getUserById(request.params.userId);
    response.status(200).json(user);
  }
  catch (error) {
    response.status(404).json({ message: (error as any).message });
  }
});

UsersRoute.post('/', async (request, response, next) => {
  try {
    const createdUser = await userService.createUser(request.body);
    response.status(201).json(createdUser);
  }
  catch (error) {
    response.status(500).json({ message: (error as any).message })
  }
});

export { UsersRoute };
