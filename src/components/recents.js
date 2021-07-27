import Users from "./Users";

function recents() {
  const users = [
    { name: "robert junior", status: "online", Date: "14 march 12:35" },
    { name: "john smith", status: "offline", Date: "30 april 10:50" },
    { name: "jane doe", status: "online", Date: "12 may 22:30" },
    { name: "john doe", status: "offline", Date: "1 january 16:45" },
  ];
  return (
    <>
      <div className="recents box">
        <div className="recentsTitle">
          <div className="line"></div>
          <p className="title">Recent Users</p>
        </div>
        <div className="recentusers">
          {users.map((items,index) => {
          return <Users key={index} name={items.name} status={items.status} Date={items.Date}/>;
        })}
        </div>
        
      </div>
    </>
  );
}
export default recents;
