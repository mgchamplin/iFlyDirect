import "./header.css";
import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPerson, faPlane } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [fromDestination, setFromDestination] = useState("")
    const [toDestination, setToDestination] = useState("")
    // useState to make sure calendar component isn't displaying by default when page loads
    const [openCalendar, setOpenCalendar] = useState(false)
    // set state with object array, date-fns library converts from javascript dates to readable strings. 
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }, 
      ]);
    
    const [openGuests, setOpenGuests] = useState(false);
    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
    });

    // function for adjusting qty
    const handleGuest = (name, operation) => {
        setGuests((prev) => {
            return {                
                // previous condition, locates name inside an array to find name inside object followed by condition which will find the object when the name is pulled. ++ if condition matches name 'incr', if not then --
                ...prev, 
                [name]: operation === 'incr' ? guests[name] ++ : guests[name] --,
            };
        });
    };

    //react-router-dom navigate allows redirect of any component on any page
    const navigate = useNavigate ()

    //shove changes to /flights(<List />)
    const handleSearch = () => {
        navigate("/flights", {state:{ fromDestination,toDestination,date,guests }})
        console.log(fromDestination,toDestination)
    }

  return (
    <div className="header">
        {/* set condition for type to adjust style in css*/}
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">                
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Roundtrip</span>
                </div>
                <div className="headerListItem activeListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>One-Way</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Multi-City</span>
                </div>
            </div>
            {/* {<></>} to create fragment and set type to !list so it doesn't display on results/List page */}
            { type !== "list" &&
                <>
                <div className="headerBanner">
                <h1 className="headerTitle">One stop shop for non-stop flights.</h1>
                <p className="headerDescription">We know your time is important.  You don't want to waste it sitting around in airports waiting for the next leg of your journey.  So, we provide you with high quality, non-stop flights throught the U.S.  Enter your destination below to get started.</p>
                <button className="headerButton">Sign in / Register</button>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                        <input type="text" 
                        placeholder='Leaving from' 
                        className='headerSearchInput'
                        // when changed, update value on results List. 
                        onChange={e=>setFromDestination(e.target.value)}
                        required
                        />
                        <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                        <input type="text" 
                        placeholder='Going to' 
                        className='headerSearchInput' 
                        onChange={e=>setToDestination(e.target.value)}
                        required
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className='headerSearchText' 
                        // onClick method for everytime span is clicked, state changes.
                        onClick={()=>setOpenCalendar(!openCalendar)}> 
                        {/* MM has to be capitalized otherwise it reflects minutes... */}
                        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>                         
                        {/* invoke useState conditions for openCalendar && for is true*/}
                        {openCalendar &&  (
                            <DateRange
                                className='dateCalender'
                                editableDateInputs={true}
                                // setStateAction for onChange to update date when clicked
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                //can't select a date from the past
                                minDate={new Date()}
                            />
                        )}
                    </div> 
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span 
                        className='headerSearchText'
                        onClick={()=>setOpenGuests(!openGuests)}>
                        {/* invoke state{} for guests and display following text with values from array */}
                        {`${guests.adults} adults | ${guests.children} children | ${guests.infants} infants`}</span>
                        {openGuests && <div className="guests">
                            <div className="guestItem">
                                <span className="guestText">Adult(s)</span>
                                <div className="guestCounter">
                                    <button 
                                    disabled={guests.adults <= 1}
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('adults','decr')}>-</button>
                                    <span className="guestCounterNumber">{guests.adults}</span>
                                    <button 
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('adults','incr')}>+</button>
                                </div>
                            </div>
                            <div className="guestItem">
                                <span className="guestText">Children</span>
                                <div className="guestCounter">
                                    <button 
                                    disabled={guests.children <= 0}
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('children','decr')}>-</button>
                                    <span className="guestCounterNumber">{guests.children}</span>
                                    <button 
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('children','incr')}>+</button>
                                </div>
                            </div>
                            <div className="guestItem">
                                <span className="guestText">Infant(s)</span>
                                <div className="guestCounter">
                                    <button 
                                    disabled={guests.infants <= 0}
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('infants','decr')}>-</button>
                                    <span className="guestCounterNumber">{guests.infants}</span>
                                    <button 
                                    className="guestCounterButton" 
                                    onClick={()=>handleGuest('infants','incr')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div> 
                    <div className="headerSearchItem">
                        {/* onClick event  */}                        
                        {/* <Link to={`/flights?city=${fromDestination}`}> */}
                        {/* <Link to={`/flights`}> */}
                        <button className="headerButton" onClick={handleSearch}>Search</button>
                        {/* <button>Search</button> */}
                        {/* </Link> */}
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Header