import React from 'react';
class TabNav extends React.Component {
  render() {
    return (
      <div>
        <ul className="tabs">
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? "open " : "";
            return (
              <li className={"tabItems " + active} key={tab}>
                <a
                  onClick={() => this.props.setSelected(tab)}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default TabNav;