import React, { useState } from 'react'

export const StoreData = () => {
    const [id, setid] = useState('')
    const [name, setname] = useState('')
const storeData = ()=>{

    localStorage.setItem('id','101')
    sessionStorage.setItem('name','Rajesh')
}

const getStoredData = ()=>{

    var id = localStorage.getItem('id')
    setid(id)
    var name = sessionStorage.getItem('name')
    setname(name)

}
const removeStoredData = ()=>{
    //localStorage.removeItem('id')
    //sessionStorage.removeItem('name')
    localStorage.clear()
    sessionStorage.clear()
}

  return (
    <div>
            <button onClick={()=>{storeData()}}>Store Data</button>
            <button onClick={()=>{getStoredData()}}>Get Stored Data</button>
            <button onClick={()=>{removeStoredData()}}>Remove Stored Data</button>
            <h1>ID = {id}</h1>
            <h2>Name = {name}</h2>
    </div>
  )
}
