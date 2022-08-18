// import useFetch from "../../hooks/useFetch"
import "./searchResult.css"
import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import axios from 'axios';
// import { useLocation } from 'react-router-dom'
// import { DateRange } from 'react-date-range';
// import { useState } from 'react';

// const SearchResult = () => {    
//     const { data, loading, error } = useFetch("/flights")
//     console.log(data)

    // const location = useLocation()

    // const [fromDestination, setFromDestination] = useState(location.state.fromDestination)
    // const [toDestination, setToDestination] = useState(location.state.toDestination)
    // const [date,setDate] = useState(location.state.date)
    // const [openCalendar, setOpenCalendar] = useState(false)
    // const [guests,setGuests] = useState(location.state.guests)

    // const { data, loading, error, reFetch } = useFetch(`/flights?city=${fromDestination}`)
    
    const SearchResult = (from, to) => {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)

        useEffect(() => {
            const fetchData = async () =>{
                setLoading(true)
                try {
                    const res = await axios.get("http://localhost:9000/flights", {params: {from_city: 'Phoenix', to_city: 'Augusta'}})
                    // const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: 'Phoenix', to_city: 'Augusta'}})
                    console.log(res.data);
                    setData(res.data);
                   
                } catch (error){
                    // setError(error)
                }
                setLoading(false)
            };
            fetchData();
        }, [])
        

  return (
    <div className="searchRes">
        {loading ? (
            "Please wait while we search for you."
            ) : (
            <>
            {/* if there's a data, images.map and for each img, return div.  */}
                {/* {data.filter((item)=>{
                    [{fromDestination},
                        {toDestination},
                        {date}]
                }).map((item)=> ( */}
                {data.map((item)=> (
                    <div className="searchItem" key={item._id}>
                    <img 
                        // src={img} 
                        src="https://picsum.photos/250/250"
                        alt="" 
                        className="searchResImg" 
                    />
                    <div className="searchResDesc">
                        <div className="searchResInfo">
                            <h1 className="searchResTitle">{`${format(new Date(item?.departure_date),'MMM dd,yyyy -  hh:mm a')}`}</h1>
       
                            <div className="searchResDepart">
                                <div className="searchResItem">
                                    <span className="searchResLocation">{item?.from_city} to {item?.to_city}</span>
                                    <span className="searchResAirline">{item?.airline}</span>
                                </div>
                            </div>
                        </div>
                        <div className="searchResCost">
                            <div className="searchResItem">
                                <span className="searchResCostAdult"><h2>${item?.adult_price}</h2></span>
                                <span className="searchResCostAdultSubTitle sub-text">per Traveler(18+)</span>
                            </div>
                            <div className="searchResItem">
                                <span className="searchResCostNotAdult"><h2>${item?.child_price}</h2>{/*(70%)*/}</span>
                                <span className="searchResCostNotAdultSubTitle">per miniTraveler</span>
                            </div>
                        </div>
                    </div>
                    <div className="searchResDetails"></div>
                    </div>
                ))}
            </>
        )}
    </div>
  )
}

export default SearchResult
