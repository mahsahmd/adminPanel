import * as Icon from "react-bootstrap-icons";
import Chart from './transactionChart/chart';
function transaction() {
  return (
    <>
      <div className="transaction box">
        <div className="transactionTitle">
          <div className="line"></div>
          <div className="title">
            Transactions
            <p className="date">jun 23-jul 23</p>
          </div>
          <a href="./">
            <Icon.ThreeDots />
          </a>
        </div>
        <div className="chart">
          <p className="transactionValue">$ 59,48</p>
          <div className="transactionChart">
            <Chart/>
          </div>
        </div>
      </div>
    </>
  );
}

export default transaction;
