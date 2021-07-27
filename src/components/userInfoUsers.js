import * as Icon from "react-bootstrap-icons";
import UserImage from "../images/user.png";
import React from "react";
function userInfoUser({ name, number, caret }) {
  function myCaret() {
    const caretIcon = { caret };
    if (caretIcon.caret === "Up") {
      return <Icon.CaretUpFill className="up" />;
    } else {
      return <Icon.CaretDownFill className="down" />;
    }
  }
  return (
    <>
      <div className="userInfoUser">
        <div className="userInfoUserImage">
          <img src={UserImage} alt="userImage" />
        </div>
        <div className="userInfoName">
          <p>{name}</p>
        </div>
        {myCaret()}
        <p className="user-info-number">{number}</p>
      </div>
    </>
  );
}
export default userInfoUser;
