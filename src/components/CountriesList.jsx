import React, { useContext } from "react";
import { InfoContext } from "../App";

const CountriesList = ({ data, isCountryChoose }) => {
  const { setInfo } = useContext(InfoContext);
  function takeInfo(index) {
    setInfo(index);
  }

  return (
    <div>
      <>
        {data.map((item, index) => (
          <div
            key={index}
            className="country"
            onClick={() => {
              isCountryChoose();
              takeInfo(index);
            }}
          >
            <div className="countryFlag">
              <img src={item.flags.png} alt="flag" />
            </div>
            <span className="countryName">{item.translations.rus.common}</span>
          </div>
        ))}
      </>
    </div>
  );
};

export default CountriesList;
