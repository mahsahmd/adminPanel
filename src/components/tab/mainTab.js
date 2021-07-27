import React from "react";
import TabNav from "../tab/tabNav";
import Tab from "../tab/Tab";
import UserInfoUser from '../userInfoUsers';
 const users = [
   { name: "jane doe", number: 5435, caret: "down" },
   { name: "jhon doe", number: 1234, caret: "Up" },
   { name: "robert junior", number: 6547, caret: "down" },
   { name: "sam smith", number: 6573, caret: "Up" },
   { name: "jhon smith", number: 8634, caret: "down" },
 ];
class mainTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Today",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    return (
      <div className='wrapper'>
        <TabNav
          tabs={["Today", "Week", "All"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "Today"}>
            <div className="userInfo box">
              {users.map((items, index) => {
                return (
                  <UserInfoUser
                    key={index}
                    name={items.name}
                    number={items.number}
                    caret={items.caret}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab isSelected={this.state.selected === "Week"}>
            <div className="userInfo box">
            </div>
          </Tab>
          <Tab isSelected={this.state.selected === "All"}>
            <div className="userInfo box">
            </div>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default mainTab;
