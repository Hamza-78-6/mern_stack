import React from "react";

function ListItem() {
  return (
    <div className="list--item">
      <div className="task">This is a task</div>
      <div className="action">
        <img
          src="./assets/completed.png"
          alt=""
          onClick={(e) => {
            console.log(e);
          }}
        />
        <img src="./assets/delete.png" alt="" />
      </div>
    </div>
  );
}

export default ListItem;
