import React, { useContext, useState } from "react";
import { InfoContext } from "../App";

const Country = ({ data, isCountryChoose }) => {
  const { info } = useContext(InfoContext);
  const [countryIndex] = useState(info);
  return (
    <div className="countryInfo" onClick={isCountryChoose}>
      <div class="countryFlag">
        <img src={data[countryIndex].flags.png} alt="flag" />
      </div>
      <span class="countryName">
        {data[countryIndex].translations.rus.official}
      </span>
      <span class="countryCapital">
        Столица - {data[countryIndex].capital[0]}
      </span>
      <span class="countryPopulation">
        Население - {data[countryIndex].population} человек
      </span>
      <span class="countryPopulation">Назад к списку стран &#128073;</span>
    </div>
  );
};

export default Country;
