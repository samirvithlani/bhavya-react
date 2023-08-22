import React, { useState } from "react";
import { AddCountry } from "./AddCountry";
import { AppContext } from "./context";
import { ListCountry } from "./ListCountry";

export const Countries = () => {
  const [title, settitle] = useState("MY COUNTRIES")
  const [countries, setcountries] = useState([
    {
      id: 1,
      name: "Argentina",
      continent: "America",
      population: 40000000,
      capital: "Buenos Aires",
    },
    {
      id: 2,
      name: "Brasil",
      continent: "America",
      population: 300000000,
      capital: "Brasilia",
    },
    {
      id: 3,
      name: "India",
      continent: "Asia",
      population: 1300000000,
      capital: "New Delhi",
    },
    {
      id: 4,
      name: "China",
      continent: "Asia",
      population: 1400000000,
      capital: "Beijing",
    },
  ]);

  const dispactchAction = (action, payload) => {
    switch (action) {
      case "add-country":
        setcountries([...countries, payload]);
        break;
      case "delete-country":
        console.log("payload...",payload)

        setcountries(countries.filter((country) => country.id !== payload));
        // countries.filter(()=>{
        //   return true;
        // })
        break;
      default:
        console.log("No action found");
        break;
    }
  };

  return (
    <div>
      <h1>COUNTRY...</h1>
      <AppContext.Provider value={{ countries,dispactchAction }}>
        <ListCountry title = {title} />
        <AddCountry />
      </AppContext.Provider>
    </div>
  );
};
