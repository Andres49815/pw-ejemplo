import { GameWithId, InsertableGame } from "./game.interface";
import GameModel from "./game.model";

export class GameRepository {
  public constructor(
    private readonly _gameModel = GameModel,
  ) {}

  public async getAllGames(): Promise<GameWithId[]> {
    const games = await this._gameModel.find().lean().exec();
    return games as GameWithId[];
  }

  public async getGameById(id: string): Promise<GameWithId> {
    const game = await this._gameModel.findOne({ id }).lean().exec();
    return game as GameWithId;
  }

  public async getGamesByGenre(gn: string): Promise<GameWithId[]> {
    return this._gameModel.find({ genre: gn }).lean().exec();
  }

  public async createGame(game: GameWithId): Promise<GameWithId> {
    await this._gameModel.create(game);
    return game;
  }
}
