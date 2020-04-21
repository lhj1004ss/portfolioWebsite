import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <React.Fragment>
      <div className="section-title">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    </React.Fragment>
  );
}
