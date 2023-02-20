import CircularProgress from "@mui/material/CircularProgress";
import { Charts } from "./chart";

function Dash1() {
  return (
    <div className="bd">
      <div className="rw">
        <div className="box">
          <h4>EARNINGS(MONTHLY)</h4>
          <h2>$40000</h2>
        </div>
        <div className="box">
          <h4>EARNINGS(ANNUALY)</h4>
          <h2>$40000</h2>
        </div>
        <div className="box">
          <h4>TASK</h4>
          <h2>
            90%
            <CircularProgress variant="determinate" value={90} />
          </h2>
        </div>
        <div className="box">
          <h4>PENDING REQUEST</h4>
          <h2>18</h2>
        </div>
      </div>
      <Charts />
    </div>
  );
}
export { Dash1 };
