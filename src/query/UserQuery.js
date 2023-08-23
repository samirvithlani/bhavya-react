import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData = ()=>{

    return axios.get("/user/user")
}

export const useFetchUserData = ()=>{

    return useQuery("user",fetchUserData,{
        // refetchOnMount:false,
        // enabled:false
        retry:10,
        retryDelay:300,
    })

}