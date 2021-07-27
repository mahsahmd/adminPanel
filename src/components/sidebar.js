import * as Icon from "react-bootstrap-icons";
import React, { useEffect } from "react";
function Sidebar({open, setOpen }) {
  const sideBar = React.useRef(null);
  useEffect(() => {
      if (open === true) {
        sideBar.current.classList.add("sibebar-responsive");
      } else {
        sideBar.current.classList.remove("sibebar-responsive");
      }
    
      
  });
  
  return (
    <>
      <div className="sidebar" ref={sideBar}>
        <div className="logo">
          {" "}
          <Icon.GraphUp className="logosvg" /> <p>Datta Able</p>{" "}
          <Icon.FilterLeft />
        </div>
        <div className="navigation parent">
          <p>navigation</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.HouseDoor /> <p className="text">dashboard</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Columns /> <p className="text">page layouts</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Layers /> <p className="text">widget</p>{" "}
              <p className="extra plus">100+</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
        <div className="elements parent">
          <p>ui element</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Box /> <p className="text">basic</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Vinyl /> <p className="text">advance</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.BoxSeam /> <p className="text">extra</p>
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.PlayCircle /> <p className="text">animations</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Grid /> <p className="text">icons</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
        <div className="forms parent">
          <p>forms</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.FileEarmarkBreak /> <p className="text">forms</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
        <div className="table parent">
          <p>table</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Inboxes /> <p className="text">table</p>
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
        <div className="charts parent">
          <p>chart & maps</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.PieChart /> <p className="text">chart</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Map /> <p className="text">maps</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
          <li className="items">
            <a href="./">
              <Icon.Cursor /> <p className="text">landing page</p>{" "}
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
        <div className="pages parent">
          <p>pages</p>
          <li className="items">
            <a href="./">
              {" "}
              <Icon.Lock /> <p className="text">authentication</p>{" "}
              <p className="extra new">new</p>
              <Icon.ChevronRight className="svgright" />
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
