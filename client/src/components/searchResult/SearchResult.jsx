import "./searchResult.css"

const SearchResult = () => {
  return (
    <div className="searchRes">
        <img 
            src="https://picsum.photos/250/250" 
            alt="" 
            className="searchResImg" 
        />
        <div className="searchResDesc">
            <div className="searchResInfo">
                <h1 className="searchResTitle">Departure Time - Arrival Time</h1>
                <div className="searchResDepart">
                    <div className="searchResItem">
                        <span className="searchResLocation">Los Angeles International (LAX) - Madrid</span>
                        <span className="searchResAirline">Spirit Airlines</span>
                    </div>
                </div>
            </div>
            <div className="searchResCost">
                <div className="searchResItem">
                    <span className="searchResCostAdult"><h2>$160</h2></span>
                    <span className="searchResCostAdultSubTitle sub-text">per Traveler(18+)</span>
                </div>
                <div className="searchResItem">
                    <span className="searchResCostNotAdult"><h2>$104</h2>{/*(65%)*/}</span>
                    <span className="searchResCostNotAdultSubTitle">per miniTraveler</span>
                </div>
            </div>
        </div>
        <div className="searchResDetails"></div>
    </div>
  )
}

export default SearchResult
