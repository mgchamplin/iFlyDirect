import "./stateList.css"
// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const stateList = () => {
    // const scrollToLast = () = > {
    //     var container = document.getElementById('sListContainer')?.scrollIntoView({ behavior: 'smooth' });

    //     var tags = container.getElementsByTagName('img');
    //     container.scrollLeft = tags[tags.length-1].offsetLeft;
    //   }

    ////set Index to 0 every time image is clicked
    // const [slideIndex, setSlideIndex] = useState(0);
    // const [open, setOpen] = useState(false);
    // const handleOpen = (i) =>{
    //     setSlideIndex(i);
    //     setOpen(true)
    // }

    // transform: translateX(${(props) => props.slideIndex * -100}vw);
    // transition: all 1.5s ease;

  return (
    <div className="sList">
        <div className="sListContainer">            
            {/* {open && 
                <div className="slider">
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                    <div className="listWrapper">
                        <img
                            onClick={()=>handleOpen(i)} 
                            src="https://picsum.photos/200/200" 
                            alt="" 
                            className="sliderImg" 
                        />                    
                    <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                <FontAwesomeIcon icon={faCircleArrowRight} />
                </div>
            } */}

            {/* redo this & count by type */}
            <FontAwesomeIcon icon={faCircleArrowLeft} className='styled-icon'/>
            <div className="listStateWrapper">
                <div className="sListItem" 
                // onClick={()=>setSlideIndex(i)}
                >
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>AL</h1>
                        <h2>Alabama</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>AK</h1>
                        <h2>Alaska</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>AZ</h1>
                        <h2>Arizona</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>AR</h1>
                        <h2>Arkansas</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>CA</h1>
                        <h2>California</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>CO</h1>
                        <h2>Colorado</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>CO</h1>
                        <h2>Colorado</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>CT</h1>
                        <h2>Connecticut</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>DE</h1>
                        <h2>Delaware</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>FL</h1>
                        <h2>Florida</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>GA</h1>
                        <h2>Georgia</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>DE</h1>
                        <h2>Delaware</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>HI</h1>
                        <h2>Hawaii</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>ID</h1>
                        <h2>Idaho</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>IL</h1>
                        <h2>Illinois</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>IN</h1>
                        <h2>Indiana</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>IA</h1>
                        <h2>Iowa</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>KS</h1>
                        <h2>Kansas</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>KY</h1>
                        <h2>Kentucky</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>LA</h1>
                        <h2>Louisiana</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>ME</h1>
                        <h2>Maine</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MD</h1>
                        <h2>Maryland</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MA</h1>
                        <h2>Massachusetts</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MI</h1>
                        <h2>Michigan</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MN</h1>
                        <h2>Minnesota</h2>
                    </div>
                </div>
                <div className="sListItem">
                <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                <div className="sListTitles">
                        <h1>MS</h1>
                        <h2>Mississippi</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MO</h1>
                        <h2>Missouri</h2>
                    </div>
                </div>        
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>MT</h1>
                        <h2>Montana</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NE</h1>
                        <h2>Nebraska</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NV</h1>
                        <h2>Nevada</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NH</h1>
                        <h2>New Hampshire</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NJ</h1>
                        <h2>New Jersey</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NY</h1>
                        <h2>New York</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>NC</h1>
                        <h2>North Carolina</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>ND</h1>
                        <h2>North Dakota</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>OH</h1>
                        <h2>Ohio</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>OK</h1>
                        <h2>Oklahoma</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>OR</h1>
                        <h2>Oregon</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>ND</h1>
                        <h2>North Dakota</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>PA</h1>
                        <h2>Pennsylvania</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>RI</h1>
                        <h2>Rhode Island</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>SC</h1>
                        <h2>South Carolina</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>SD</h1>
                        <h2>South Dakota</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>TN</h1>
                        <h2>Tennessee</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>TX</h1>
                        <h2>Texas</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>UT</h1>
                        <h2>Utah</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>ND</h1>
                        <h2>North Dakota</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>VT</h1>
                        <h2>Vermont</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>VA</h1>
                        <h2>Virginia</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>WA</h1>
                        <h2>Washington</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>WV</h1>
                        <h2>West Virginia</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>WI</h1>
                        <h2>Wisconsin</h2>
                    </div>
                </div>
                <div className="sListItem">
                    <img src='https://picsum.photos/300/200' alt="" className='sListImg grow'/>
                    <div className="sListTitles">
                        <h1>WY</h1>
                        <h2>Wyoming</h2>
                    </div>
                </div>                
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='styled-icon' />
        </div>
    </div>
  )
}

export default stateList
