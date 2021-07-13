import React from "react";

function Child(props) {
  return (
    <div>
      <h3>Name : {props.name}</h3>
      <h3>Phone : {props.phone}</h3>
    </div>
  );
}

export default Child;
