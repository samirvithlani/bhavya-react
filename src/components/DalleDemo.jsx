import axios from 'axios'
import React, { useEffect } from 'react'

export const DalleDemo = () => {

    const getImage = async(data) => {

        const dalleObj = {
            "prompt": "a photo of a happy corgi puppy sitting and facing forward, studio light, longshot",
            "n":1,
            "size":"1024x1024"
        }
        const res = await axios.post("https://api.openai.com/v1/images/generations",dalleObj,{
            headers:{
                "Authorization":"Bearer enter your key here",
                "Content-Type":"application/json"
            }
        })

        console.log(res)
    }
    useEffect(() => {
      
    getImage()
      
    }, [])
    
  return (
    <div>
            
            
    </div>
  )
}

