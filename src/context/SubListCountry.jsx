import React, { useContext } from 'react'
import { AppContext } from './context';

export const SubListCountry = (props) => {
    const { countries, dispactchAction } = useContext(AppContext);
  return (
    <div>
        <h1>TITLE = {props.title}</h1>
        <h1>SUB COUNTRIES...</h1>
        <ul>
            {countries?.map((country) => {
                return(
                    <li>{country.name}</li>
                )
            })}
        </ul>
    </div>
  )
}
