import Sidebar from "./sidebar";
import Heading from "./heading";
import Transactions from "./transactions";
import Rating from "./rating";
import News from "./news";
import Calls from "./calls";
import Recents from "./recents";
import MainTab from "./tab/mainTab";
import React, { useEffect } from "react";

function Main() {
  const [open, setOpen] = React.useState(false);
  const dashboard = React.createRef(null);
    useEffect(()=>{
       if (open === true) {
        dashboard.current.classList.add("dashboard-responsive");
       }
       else{
        dashboard.current.classList.remove("dashboard-responsive");
       }
    })
   
  
  return (
    <>
      <div className="main">
        <Sidebar open={open} setOpen={setOpen} />
        <Heading open={open} setOpen={setOpen} />
        <div ref={dashboard} className="dashboard">
          <Transactions />
          <Rating />
          <News />
          <Calls />
          <Recents />
          <MainTab />
        </div>
      </div>
    </>
  );
}

export default Main;
