import React, { useState } from "react";
import { AddElement } from "./components/AddElement";

export const GifApp = () => {
  const [arr, setArr] = useState(["JS", "Java", "C#", "Python"]);

  // const handleAdd = (event) => {
  //   setArr([...arr, { key: arr.length.toString(), name: "PHP" }]);
  //   // console.log(event);
  // };

  return (
    <div>
      <h2>Gif App</h2>
      <AddElement setArr={setArr} />
      <hr />

      <ol>
        {arr.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ol>
    </div>
  );
};
