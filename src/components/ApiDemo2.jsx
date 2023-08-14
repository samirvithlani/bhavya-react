import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [loder, setloder] = useState()
    const getUsers = async () => {
        setloder(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res.data.data)
        if(res?.data?.data?.length > 0){
            setloder(false)
        }
        
    }
  return (
    <div>
        <button onClick={()=>{getUsers()}}>Get Users</button>
        {
            loder?<h1>Loding...</h1>:null
        }
    </div>
  )
}
