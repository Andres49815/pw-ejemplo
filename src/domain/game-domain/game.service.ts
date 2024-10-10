import { generateUUID } from "../../utils";
import { GameWithId, InsertableGame } from "./game.interface";
import { GameRepository } from "./game.repository";

export class GameService {
  public constructor(
    private readonly _gameRepository: GameRepository,
  ) { }

  public async getAllGames(): Promise<GameWithId[]> {
    return this._gameRepository.getAllGames();
  }

  public async getGamesByGenre(gn: string): Promise<GameWithId[]> {
    return this._gameRepository.getGamesByGenre(gn);
  }

  public async createGame(game: InsertableGame): Promise<GameWithId> {
    const gameWithId: GameWithId = {
      id: generateUUID(),
      name: game.name,
      console: game.console,
      genre: game.genre,
      rating: game.rating,
    };

    const inserted = await this._gameRepository.createGame(gameWithId);
    return inserted;
  }

}
