import "./assets/Seats.css";
import Seat from "./Seat.jsx";

export default function Seats() {
  let x = 0;
  return (
    <>
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={true}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
        <div className="row">
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
          <Seat i={x++} occupied={false}></Seat>
        </div>
      </div>
    </>
  );
}
