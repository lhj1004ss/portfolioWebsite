import React from "react";

export default function CardInfo(props) {
  return (
    <div className="card-info">
      <p className="card-title">{props.title}</p>
      <p className="card-subTitle">{props.subTitle}</p>
      <div className="btn-a">
        <a href={props.link} className="card-link btn">
          View
        </a>
      </div>
    </div>
  );
}
