import React from "react";

export const UserList = (props) => {
  return (
    <div>
      UserList Title ={props.title}
      {props.users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.id}</h1>
          </div>
        );
      })}
      <button onClick={props.test}>Click Me</button>
    </div>
  );
};
