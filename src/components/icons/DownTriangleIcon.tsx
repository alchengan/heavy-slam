interface DownTriangleIconProps {
  mode: "heavyslam" | "heatcrash" | "grassknot" | "lowkick";
}

export default function DownTriangleIcon({ mode }: DownTriangleIconProps) {
  return (
    <svg
      fill={
        mode === "heavyslam"
          ? "gray"
          : mode === "heatcrash"
            ? "red"
            : mode === "grassknot"
              ? "green"
              : "orange"
      }
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="256px"
      height="256px"
      viewBox="-9.62 4 115.39 115.39"
      stroke={
        mode === "heavyslam"
          ? "gray"
          : mode === "heatcrash"
            ? "red"
            : mode === "grassknot"
              ? "green"
              : "orange"
      }
      strokeWidth="4"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.19230799999999998"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"></path>
        </g>
      </g>
    </svg>
  );
}
