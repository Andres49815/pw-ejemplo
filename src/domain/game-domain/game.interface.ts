type Game = {
  name: string;
  console: string;
  genre: string;
  rating: number;
}

export type GameWithId = Game & { id: string };
export type InsertableGame = Game;