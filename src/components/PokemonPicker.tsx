import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { PokemonWeight } from "../helpers/getPokemon";

interface PokemonPickerProps {
  pokemonOptions: PokemonWeight[];
  setWeight: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

type PokemonOption = {
  label: string;
  value: PokemonWeight;
};

export default function PokemonPicker({
  pokemonOptions,
  setWeight,
  disabled = false,
}: PokemonPickerProps) {
  const [pokemon, setPokemon] = useState<PokemonWeight>();

  const options = pokemonOptions.map((pokemon) => ({
    label: pokemon.name,
    value: pokemon,
  }));

  const handlePokemonChange = (e: any, _pokemon: PokemonOption | null) => {
    if (_pokemon) {
      setPokemon(_pokemon.value);
      setWeight(_pokemon.value.weight);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Autocomplete
        className="w-full"
        disablePortal
        disabled={disabled}
        options={options}
        renderInput={(params) => <TextField {...params} label="Pokémon" />}
        onChange={handlePokemonChange}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon ? pokemon.pokeApiId : "0"}.png`}
        className="w-48 py-4"
        alt="pokemon sprite"
      />
      <div>{pokemon ? pokemon.name : "-"}</div>
      <div>{pokemon ? `${pokemon.weight} kg` : "-"}</div>
    </div>
  );
}
