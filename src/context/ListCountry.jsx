import React, { useContext } from "react";
import { AppContext } from "./context";
import { SubListCountry } from "./SubListCountry";

export const ListCountry = (props) => {
  const { countries, dispactchAction } = useContext(AppContext);
  console.log(countries);
  return (
    <div>
        <h1>TITLE = {props.title}</h1>
      <h1>LIST COUNTRY....</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Continent</th>
            <th>Population</th>
            <th>Capital</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {countries?.map((country) => {
            return (
              <tr key={country.id}>
                <td>{country.id}</td>
                <td>{country.name}</td>
                <td>{country.continent}</td>
                <td>{country.population}</td>
                <td>{country.capital}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispactchAction("delete-country", country.id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubListCountry title = {props.title}/>
    </div>
  );
};
