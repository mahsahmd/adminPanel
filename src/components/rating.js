import * as Icon from "react-bootstrap-icons";
function rating() {
  return (
    <>
      <div className="rating box">
        <div className="ratingTitle">
          <div className="line"></div>
          <p className="title">project rating</p>
        </div>
        <div className="rate">
          <div className="rateValue">
            <p>4.3 </p>
            <Icon.StarFill />
          </div>
          <p className="rateUp">
            0.4 <Icon.CaretUpFill />
          </p>
        </div>
      </div>
    </>
  );
}

export default rating;
