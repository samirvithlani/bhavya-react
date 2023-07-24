import React from "react";
import { UserList } from "./UserList";

export const UserComponent = (props) => {
  var users = [
    {
      id: 1,
      name: "amit",
      age: 20,
    },
    {
      id: 2,
      name: "ram",
      age: 30,
    },
  ];

  function test(){

    alert("test");
  }
  return (
    <div>
      <h1>User UserComponent</h1>
      {props.title}
      {/* <button onClick={test}>Click Me</button> */}
      {/* <button onClick={()=>{test()}}>Click Me</button> */}
      <UserList title={props.title} users={users} test ={test} />
    </div>
  );
};
