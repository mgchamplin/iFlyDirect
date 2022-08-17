import useFetch from "../../hooks/useFetch"
import "./searchResult.css"
// import { format, parseISO } from 'date-fns'
// import { useState } from 'react';

const SearchResult = () => {
    const { data, loading, error } = useFetch("/flights")
    console.log(data)

    // let flightData = [data];

    // const handleMove = (i) => {
    //     let newSlideNumber;
    
    //     if (index === "i") {
    //         newIndexNumber = indexNumber === 0 ? flightData.length : indexNumber - 1;
    //     } else {
    //       newSlideNumber = indexNumber === flightData.length ? 0 : indexNumber + 1;
    //     }
    
    //     setSlideNumber(newSlideNumber)
    //   };
    
//     const flightArray(array, elem){
//     let newData = [];
//     for (i = 0; i < array.length; i++){
//         if 
//         flightData[i]
//     }
// }

    // const images = [ 
    //     "https://picsum.photos/250/250",
    //     "https://picsum.photos/250/250",
    //     "https://picsum.photos/250/250",
    //     "https://picsum.photos/250/250",
    // ]

    // const [date, setDate] = useState([
    //     {
    //         startDate: new Date(data[0]?.departure_date),            
    //         key: 'selection'
    //     } 
    //   ]);

  return (
    <div className="searchRes">
        {loading ? (
            "Please wait while we search for you."
            ) : (
            <>
            {/* if there's a data, images.map and for each img, return div.  */}
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
                            <h1 className="searchResTitle">{item?.departure_date}</h1>
                            {/* <h1 className="searchResTitle">{`${format({data[0]?.departure_date}), "MM/dd/yyyy HH:mm:"}}`}</h1> */}
                            {/* <h1 className="searchResTitle">{`${format(parseISO(date[0].startDate)), "MM/dd/yyyy HH:mm:ss"}}`}</h1> */}
                            {/* <h1 className="searchResTitle">{`${format(parseISO(date[0].departure_date), "EEEE MM/dd/yyyy; HH:mm")}`}</h1> */}                
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
                                <span className="searchResCostNotAdult"><h2>${item?.child_price*.65}</h2>{/*(65%)*/}</span>
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
