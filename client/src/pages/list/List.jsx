import { useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import { DateRange } from 'react-date-range';
// import useFetch from "../../hooks/useFetch"
import SearchResult from '../../components/searchResult/SearchResult';

const List = () => {
  // useLocation hook returns the current location object. Performs some side effect whenever the current location changes.
  const location = useLocation()
  //since it's not globally scoped, need to redefine states
  // const [destination,setDestination] = useState(location.state.destination)
  const [fromDestination, setFromDestination] = useState(location.state.fromDestination)
  const [toDestination, setToDestination] = useState(location.state.toDestination)
  const [date,setDate] = useState(location.state.date)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [guests,setGuests] = useState(location.state.guests)

  const navigate = useNavigate ()

  //shove changes to /flights(<List />)
  const handleSearch = () => {
      navigate("/flights", {state:{ fromDestination,toDestination,date,guests }})
  }

  // const { data, loading, error } = useFetch("/flights")

  // console.log(location)

  return (
    <div className='styled-list-field'>
      <div>
        <Navbar />
        {/* passing in prop-type hides search bar */}
        <Header type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listTitle"> Search </h1>
              <div className="listItem">
                <label> From Location </label>
                <input placeholder={fromDestination} type="text" />
                <label> To Destination </label>
                <input placeholder={toDestination} type="text" />
              </div>
              <div className="listItem">
                <label> Departure date </label>
                {/* copy paste format fragment from Header, change state to toggle opposite state when clicked */}
                <span onClick={()=>setOpenCalendar(!openCalendar)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {/* same as Header component, if open then show */}
                {openCalendar && (
                  <DateRange 
                    onChange={(item) => setDate([item.selection])}
                    //can't select a date from the past
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="listItem">
                <div className="listOptions">
                  <label> Options </label>
                  <div className="listOptionItem">
                    <span className="listOptionText"> Min price <small>for flight</small></span>
                    <input type="number" className='listOptionInput'/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> Max price <small>for flight</small></span>
                    <input type="number" className='listOptionInput'/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> Adult(s) </span>
                    <input type="number" min={1} className='listOptionInput' placeholder={guests.adults}/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> Children </span>
                    <input type="number" min={0} className='listOptionInput' placeholder={guests.children}/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> Infant(s) </span>
                    <input type="number" min={0} className='listOptionInput' placeholder={guests.infants}/>
                  </div>
                </div>
              </div>
              {/* <Link to={`/flights?city=${fromDestination}`}>
              <Link to={`/flights`}> */}
                <button className="headerButton" onClick={handleSearch}>Search</button>
              {/* </Link> */}
            </div>
              <div className="listResult">
              <SearchResult/>
            {/* {data.map((item)=> (
              <SearchResult item={item} key={item._id}/>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List