import express from 'express';
import { GameService } from './game.service';
import { GameRepository } from './game.repository';

const GameRoute = express.Router();

const gameService = new GameService(
  new GameRepository(),
);

GameRoute.get('/', async (request, response, next) => {
  try {
    const games = await gameService.getAllGames();
    response.status(200).json(games);
  }
  catch (error) {
    response.status(500).json({ message: (error as any).message });
  }
});

GameRoute.get('/:gn', async (request, response, next) => {
  try {
    const games = await gameService.getGamesByGenre(request.params.gn);
    response.status(200).json(games);
  }
  catch (error) {
    response.status(500).json({ message: (error as any).message });
  }
});

GameRoute.post('/', async (request, response, next) => {
  try {
    const body = request.body;
    const created = await gameService.createGame(body);
    response.status(201).json(created);
  }
  catch (error) {
    response.status(500).json({ message: (error as any).message });
  }
});

export { GameRoute };
