import UserImage from "../images/user.png";
function Users({name,status,Date}) {
  return (
    <>
      <div className="user">
        <div className="userImage">
          <img src={UserImage} alt="" />
        </div>

        <div className="userText">
          <p className="name">{name}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="userDate">
          <div className={`status ${status}`}></div>
          <div className="date">{Date}</div>
        </div>
        <div className="buttons">
          <button className="reject">Reject</button>
          <button className="approve">Approve</button>
        </div>
      </div>
    </>
  );
}
export default Users;
