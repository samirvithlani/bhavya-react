import React from 'react'
import { useParams } from 'react-router-dom'

export const AboutCompany = () => {
    var id = useParams().id;
  return (
    <div>AboutCompany
        <h1>ID = {id}</h1>
    </div>
  )
}
