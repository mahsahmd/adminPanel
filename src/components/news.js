import * as Icon from "react-bootstrap-icons";
import Chart from "./newsChart/chart";

 function news(){
     return (
       <div className="news box">
         <div className="newsTitle">
           <div className="line"></div>
           <p className="title">News Statistics</p>
           <a href="./">
             <Icon.ThreeDots />
           </a>
         </div>
         <div className="newsChart">
           <Chart />
         </div>
       </div>
     );
 }

 export default news;