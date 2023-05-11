import axios from "axios"
import { useState } from "react"


const useFetch = url => {

    const [apiInfo, setApIInfo] = useState()

    const getProductById = () => {
        axios.get(url)
            .then(res=> setApIInfo(res.data))
            .catch(err => console.log(err))
    }
    return [apiInfo, getProductById]
}

export default useFetch