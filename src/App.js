import { createContext, useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";
import useFetch from "react-fetch-hook";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";

// Create a new context and export
export const InfoContext = createContext();

// Create a Context Provider
const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

function App() {
  const [isCountry, setIsCountry] = useState(false);

  const isCountryChoose = () => {
    setIsCountry(!isCountry);
  };
  const { isLoading, error, data } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,translations,population"
  );
  if (isLoading) return "Loading...";
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <InfoContextProvider>
        {!isCountry ? (
          <>
            <MainTitle title="Список стран" />
            <CountriesList data={data} isCountryChoose={isCountryChoose} />
          </>
        ) : (
          <Country data={data} isCountryChoose={isCountryChoose} />
        )}
      </InfoContextProvider>
    </div>
  );
}

export default App;
