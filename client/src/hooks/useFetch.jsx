import { useState, useEffect } from "react";
import axios from 'axios';

// PR request, loading will be true then after ending the request fills data if there is data inside the array, then if not successful then error will be true and pass the error.
const useFetch = (url, from, to) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true)
            try {
                // const res = await axios.get(url)
                const params = new URLSearchParams()
                params.append('from_city', from)
                params.append('to_city', to)
                const res = await axios.get(url, params);
                setData(res.data);
                
            } catch (error){
                setError(error)
            }
            setLoading(false)
        };
        fetchData();
    }, [url])

    
    const reFetch = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams()
            params.append('from_city', from)
            params.append('to_city', to)
            const res = await axios.get(url, params);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    // send back data
    // const ret = await reFetch; 
    return { data, loading, error, reFetch };
};

export default useFetch;