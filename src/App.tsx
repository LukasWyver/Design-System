import { useState } from "react";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-violet-500">Hello World</h3>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
    </div>
  );
}
