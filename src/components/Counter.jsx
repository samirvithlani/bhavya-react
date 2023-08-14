import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log("Counter component mounted")
    }, [count])

    //[] is the dependency array. If we want to run useEffect only once, we pass an empty array.
    //
    
  return (
    <div>
        <h1>COUNTER...</h1>
        <h2>count ={count}</h2>
        <button onClick={()=>setcount(count+1)}> + </button>
    </div>
  )
}

