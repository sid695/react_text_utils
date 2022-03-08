import React from "react";

function Alerts(props) {
  return (
    //   to stop from shifiting of layout used style height 50px
      <div style={{height:'50px'}}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    
    )}
    </div>
  );
}

export default Alerts;
