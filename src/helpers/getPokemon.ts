import weights from "../data/pokemonWeights.json";
import slammers from "../data/slammerWeights.json";
import crashers from "../data/crasherWeights.json";

export type PokemonWeight = {
  name: string;
  weight: number;
  pokeApiId: number;
};

export function GetWeights(): PokemonWeight[] {
  return weights;
}

export function GetSlammerWeights(): PokemonWeight[] {
  return slammers;
}

export function GetCrasherWeights(): PokemonWeight[] {
  return crashers;
}
