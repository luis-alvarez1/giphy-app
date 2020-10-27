import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/fetchGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    fetchGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);

  return state;
};
