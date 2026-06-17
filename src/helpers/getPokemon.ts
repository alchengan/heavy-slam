import weights from "../data/pokemonWeights.json";

export type PokemonWeight = {
  name: string;
  weight: number;
  slam?: boolean;
  crash?: boolean;
  pokeApiId: number;
};

export function GetWeights(): PokemonWeight[] {
  return weights;
}

export function GetSlammerWeights(): PokemonWeight[] {
  const pokemonWeights = weights;
  const slammers = pokemonWeights.filter((pokemon) => pokemon.slam);
  return slammers;
}

export function GetCrasherWeights(): PokemonWeight[] {
  const pokemonWeights = weights;
  const crashers = pokemonWeights.filter((pokemon) => pokemon.crash);
  return crashers;
}
