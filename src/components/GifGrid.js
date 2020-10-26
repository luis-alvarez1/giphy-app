import React, { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/fetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetchGifs(category).then((imgs) => setImgs(imgs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        <ol>
          {imgs.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
