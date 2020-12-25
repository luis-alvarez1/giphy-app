import React, { useState } from "react";
import { AddElement } from "./components/AddElement";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [arr, setArr] = useState(["Example"]);

  return (
    <div>
      <h2>Gif App</h2>
      <AddElement setArr={setArr} />
      <hr />

      <ol>
        {arr.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </ol>
    </div>
  );
};
