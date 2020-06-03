import React from "react";

function BabyNames(props) {
  // console.log('this is props' + props);
  return (
    <div>
      <ul>
        <li key={props.id}className={props.item.name.sex}> {props.item.name}</li>
      </ul>
    </div>
  );
}

export default BabyNames;
