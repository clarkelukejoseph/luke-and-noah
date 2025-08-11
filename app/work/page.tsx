"use client";

import Header from "../components/Header";
import WorkGrid, { ItemConfig } from "../components/WorkGrid";

const CardCell = ({ gridIndex, position, isMoving }: ItemConfig) => (
  <div
    className={`absolute inset-1 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-2 text-xs text-gray-800 transition-shadow ${
      isMoving ? "shadow-xl" : "shadow-md"
    }`}
  >
    <div className="text-base font-bold mb-1">#{gridIndex}</div>
    <div className="text-[10px] text-gray-500">
      {position.x}, {position.y}
    </div>
  </div>
);

export default function WorkPage() {
  return (
    <main>
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Header />
        <div className="w-full h-screen">
          <WorkGrid gridSize={200} renderItem={CardCell} />
        </div>
      </div>
    </main>
  );
}
