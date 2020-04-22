import React, { Component } from "react";
import CardInfo from "./CardInfo";

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-display">
          <div
            className="card"
            OnClick={(e) => {
              this.props.click(this.props.item);
            }}
          >
            <img
              className="card-image"
              src={this.props.item.imgSrc}
              alt={this.props.item.imgSrc}
            ></img>
            <CardInfo
              title={this.props.item.title}
              subTitle={this.props.item.subTitle}
              link={this.props.item.link}
            ></CardInfo>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
