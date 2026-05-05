import { alpha, styled, Switch } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import PokemonPicker from "./PokemonPicker";
import DownTriangleIcon from "./icons/DownTriangleIcon";
import {
  GetCrasherWeights,
  GetSlammerWeights,
  GetWeights,
  PokemonWeight,
} from "../helpers/getPokemon";
import { blueGrey, orange } from "@mui/material/colors";

export default function HeavySlam() {
  const [allWeights, setAllWeights] = useState<PokemonWeight[]>([]);
  const [slammerWeights, setSlammerWeights] = useState<PokemonWeight[]>([]);
  const [crasherWeights, setCrasherWeights] = useState<PokemonWeight[]>([]);

  // TODO: toggle between heavy slam and heat crash
  const [crashing, setCrashing] = useState(false);

  const [attackWeight, setAttackWeight] = useState(0);
  const [defendWeight, setDefendWeight] = useState(0);

  useEffect(() => {
    setAllWeights(GetWeights());
    setSlammerWeights(GetSlammerWeights());
    setCrasherWeights(GetCrasherWeights());
  }, []);

  const weightRatio =
    attackWeight === 0 || defendWeight === 0 ? 0 : attackWeight / defendWeight;
  const heavySlamBP =
    weightRatio == 0
      ? 0
      : weightRatio >= 5
        ? 120
        : weightRatio >= 4
          ? 100
          : weightRatio >= 3
            ? 80
            : weightRatio >= 2
              ? 60
              : 40;

  const handleSlamCrashToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setCrashing(e.target.checked);
  };

  const SlamCrashToggle = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: blueGrey[300],
    },
    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
      backgroundColor: blueGrey[500],
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: orange[600],
      "&:hover": {
        backgroundColor: alpha(orange[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: orange[400],
    },
  }));

  return (
    <div
      className={`flex flex-col items-center ${crashing ? "bg-orange-200" : "bg-slate-300"}`}
    >
      {crashing ? (
        <div className="text-orange-600 text-4xl font-bold">Heat Crash</div>
      ) : (
        <div className="text-slate-600 text-4xl font-bold">Heavy Slam</div>
      )}
      <div className="flex items-center pb-2">
        <div className="pb-1">Heavy Slam</div>
        <SlamCrashToggle checked={crashing} onChange={handleSlamCrashToggle} />
        <div className="pb-1">Heat Crash</div>
      </div>
      <PokemonPicker
        pokemonOptions={crashing ? crasherWeights : slammerWeights}
        setWeight={setAttackWeight}
      />
      <div className="relative h-48">
        <DownTriangleIcon crashing={crashing} />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-xl">
            {crashing ? "Heat Crash" : "Heavy Slam"}
          </div>
          <div className="text-4xl font-bold pb-14">
            {heavySlamBP == 0 ? "-" : heavySlamBP} BP
          </div>
        </div>
      </div>
      <PokemonPicker pokemonOptions={allWeights} setWeight={setDefendWeight} />
    </div>
  );
}
