// import useFetch from "../../hooks/useFetch"
import "./searchResult.css"
import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import flightService from "../../hooks/useFetch";
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
    
    const SearchResult = (props) => {
        // const [data, setData] = useState([])
        // const [loading, setLoading] = useState(false)
        // const [error, setError] = useState(false)
        // console.log("search results for", props)

        // console.log("inside search result",from,to)

        // useEffect(() => {
            
                // try {
                //     // const res = await axios.get("http://localhost:9000/flights", {params: {from_city: 'Phoenix', to_city: 'Augusta'}})
                //     // const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: 'Phoenix', to_city: 'Augusta'}})
                //     console.log("inside useeffect result",from,to)
                //     const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: from, to_city: to}})
                //     // const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: 'Montgomery', to_city: 'Juneau'}})
                //     // const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: 'Juneau', to_city: 'Augusta'}})
                //     // const res = await axios.get("https://iflydirectadminbuild.herokuapp.com/flights", {params: {from_city: 'Phoenix', to_city: 'Montgomery'}})                    
                //     console.log(res.data);
                //     setData(res.data);
                   
                // } catch (error){
                //     // setError(error)
                // }
                // setLoading(false)           
            
        // }, [])
        
        // var data2 = props.data?.filter(function (entry){
        //     return props.data.from.from < entry.departure_date < props.data.from.to 
        // });
        

  return (
    <div className="searchRes">
        {props.loading ? (
            "Please wait while we search for you."
            ) : (            
                props.data?.map((item)=> (
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
            ))
        )}
    </div>
  )
}

export default SearchResult
