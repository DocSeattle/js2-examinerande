import React from "react";
import "./assets/Film.css";
export default class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: String,
      Year: String,
      Price: Number,
      Image: URL,
    };
  }
  render() {
    return (
      <>
        <div className="film-display">
          <img src={this.state.image} alt="" />
          <h3 className="film-h3">{this.state.name}</h3>
          <h5 className="film-h5">{this.state.price}</h5>
        </div>
      </>
    );
  }
}
