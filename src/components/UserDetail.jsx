import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    var id = useParams().id
    const [user, setuser] = useState({})
    const getUserDetail = async () => {

        const res= await axios.get("https://node5.onrender.com/user/user/"+id);
        setuser(res.data.data);

    }
    useEffect(() => {
      
        getUserDetail();
      
    }, [])
    
  return (
    <div>UserDetail
        {
            user._id== undefined || user._id==null ? <h1>Loding...</h1> :  
        <>
            <h1>ID = {id}</h1>
            <h1>Name = {user.name}</h1>
            <h1>Email = {user.email}</h1>
            <h1>Age = {user.age}</h1>
            <h1>Active = {user.isActive ? "ACTIVE" : "NOT ACTIVE"}</h1>
        </>
    }

    </div>
  )
}
