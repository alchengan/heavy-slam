import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonPicker from "./PokemonPicker";
import DownTriangleIcon from "./icons/DownTriangleIcon";
import {
  GetCrasherWeights,
  GetSlammerWeights,
  GetWeights,
  PokemonWeight,
} from "../helpers/getPokemon";

export default function HeavySlam() {
  const [allWeights, setAllWeights] = useState<PokemonWeight[]>([]);
  const [slammerWeights, setSlammerWeights] = useState<PokemonWeight[]>([]);
  const [crasherWeights, setCrasherWeights] = useState<PokemonWeight[]>([]);

  const [mode, setMode] = useState<
    "heavyslam" | "heatcrash" | "grassknot" | "lowkick"
  >("heavyslam");

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
    weightRatio === 0
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
  const grassKnotBP =
    defendWeight === 0
      ? 0
      : defendWeight >= 200
        ? 120
        : defendWeight >= 100
          ? 100
          : defendWeight >= 50
            ? 80
            : defendWeight >= 25
              ? 60
              : defendWeight >= 10
                ? 40
                : 20;
  const moveBP =
    mode === "heavyslam" || mode === "heatcrash" ? heavySlamBP : grassKnotBP;

  const handleModeSelect = (
    _mode: "heavyslam" | "heatcrash" | "grassknot" | "lowkick",
  ) => {
    setMode(_mode);
  };

  return (
    <div
      className={`flex flex-col h-screen items-center ${
        mode === "heavyslam"
          ? "bg-slate-300"
          : mode === "heatcrash"
            ? "bg-red-200"
            : mode === "grassknot"
              ? "bg-green-200"
              : "bg-orange-200"
      }`}
    >
      <ButtonGroup
        className="my-4"
        size="large"
        variant="contained"
        aria-label="mode-select"
      >
        <Button
          className="w-40"
          color="primary"
          variant={mode === "heavyslam" ? "outlined" : "contained"}
          onClick={(e) => handleModeSelect("heavyslam")}
        >
          <div
            className={`${mode === "heavyslam" ? "text-slate-600" : "text-slate-300"} font-bold`}
          >
            Heavy Slam
          </div>
        </Button>
        <Button
          className="w-40"
          color="error"
          variant={mode === "heatcrash" ? "outlined" : "contained"}
          onClick={(e) => handleModeSelect("heatcrash")}
        >
          <div
            className={`${mode === "heatcrash" ? "text-red-600" : "text-red-300"} font-bold`}
          >
            Heat Crash
          </div>
        </Button>
        <Button
          className="w-40"
          color="success"
          variant={mode === "grassknot" ? "outlined" : "contained"}
          onClick={(e) => handleModeSelect("grassknot")}
        >
          <div
            className={`${mode === "grassknot" ? "text-green-600" : "text-green-500"} font-bold`}
          >
            Grass Knot
          </div>
        </Button>
        <Button
          className="w-40"
          color="warning"
          variant={mode === "lowkick" ? "outlined" : "contained"}
          onClick={(e) => handleModeSelect("lowkick")}
        >
          <div
            className={`${mode === "lowkick" ? "text-orange-600" : "text-orange-300"} font-bold`}
          >
            Low Kick
          </div>
        </Button>
      </ButtonGroup>
      <PokemonPicker
        pokemonOptions={
          mode === "heavyslam"
            ? slammerWeights
            : mode === "heatcrash"
              ? crasherWeights
              : allWeights
        }
        setWeight={setAttackWeight}
        disabled={mode === "grassknot" || mode === "lowkick"}
      />
      <div className="relative h-48">
        <DownTriangleIcon mode={mode} />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-xl">
            {mode === "heavyslam"
              ? "Heavy Slam"
              : mode === "heatcrash"
                ? "Heat Crash"
                : mode === "grassknot"
                  ? "Grass Knot"
                  : "Low Kick"}
          </div>
          <div className="text-4xl font-bold pb-14">
            {moveBP === 0 ? "-" : moveBP} BP
          </div>
        </div>
      </div>
      <PokemonPicker pokemonOptions={allWeights} setWeight={setDefendWeight} />
    </div>
  );
}
