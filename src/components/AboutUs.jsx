import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'

export const AboutUs = () => {
    const {style} = useContext(AppContext)
    console.log("about us....",style)
    var companies = [
        {
            id:101,
            name:"TATA"
        },{
            id:102,
            name:"WIPRO"
        },
        {
            id:103,
            name:"INFOSYS"
        }
    ]
  return (
    <div>
        <h1>ABOUT US</h1>
        <ul>
            {
                companies?.map((com)=>{
                    return(<li>
                        <Link to ={`/aboutus/aboutcompany/${com.id}`}>{com.name}</Link>
                    </li>)
                })
            }
        </ul>
        {/* <Link to ="/aboutus/aboutcompany/101">TATA</Link> */}
    </div>
  )
}
