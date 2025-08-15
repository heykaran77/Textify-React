import React from "react";

const Alert = (props) => {
  const caps = (word) => {
    const lower = word.toLowerCase();

    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      <div className="container my-2">
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
            role="alert">
            <strong>{caps(props.alert.type)}</strong> : <i>{props.alert.msg}</i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
