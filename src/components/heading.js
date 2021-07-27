import * as Icon from "react-bootstrap-icons";
import React from 'react';

function Heading({open,setOpen}){
  const menu = React.useRef(null);

  function handleMenu(){
    menu.current.classList.toggle("change");
    setOpen(!open);
  }
    return (
      <>
        <div className="heading">
          <div className="headingTop">
            <Icon.Crop className="crop" />
            <p>dropdown</p>
            <Icon.ChevronDown className="chevronDown" />
            <Icon.Search className="search" />
          </div>
          <div className="headingBottom">
            <p className="dashboardTile">dashboard</p>
            <p className="direction">
              <Icon.HouseDoor /> /Dashboard CRM
            </p>
            <div  ref={menu} onClick={handleMenu} className="buttoncontainer">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Heading;