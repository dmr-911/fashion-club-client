import { useState, useEffect } from "react"

const useDelay = () =>{
    const [loadTime, setLoadTime] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setLoadTime(data))
    },[]);

    return {loadTime};
};

export default useDelay;