import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonComponent } from './ButtonComponent'

export const ContactUs = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to ="director">Director</Link>
            </li>
            <li>
                <Link to ="/contactus/ceo">Ceo</Link>
            </li>
        </ul>
        <ButtonComponent buttonName="Submit"/>
    </div>
  )
}
