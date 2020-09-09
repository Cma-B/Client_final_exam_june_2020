import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeriesList();
  }, []);

  const getSeriesList = async () => {
    let response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
    );
    setSeries(
      response.yourDataObject._embedded["viaplay:blocks"][0]._embedded[
        "viaplay:products"
      ]
    );
  };

  let seriesList = 

  return <div></div>;
};

export default App;
