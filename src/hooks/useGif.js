import axios from "axios";
import { useCallback, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [spinner, setSpinner] = useState(false);

  const fetchData = useCallback(async () => {
    setSpinner(true);

    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

      const { data } = await axios.get(
        tag ? `${url}&tag=${encodeURIComponent(tag)}` : url,
      );

      console.log("API response:", data);

      const imageSource = data.data.images.downsized_large.url;

      console.log("GIF URL:", imageSource);

      setGif(imageSource);
    } catch (error) {
      console.log("GIF error:", error.response?.data || error);
    } finally {
      setSpinner(false);
    }
  }, [tag]);


  return { gif, fetchData, spinner };
};

export default useGif;
