import React, { useState } from "react";
import { UserList } from "./UserList";

export const UserComponent = (props) => {
  //var users
  //function setusers()
  //state = {users:[]}
  let [users, setusers] = useState([
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

    {
      id: 3,
      name: "neha",
      age: 31,
    },
  ]);

  //react hooks --> useState
  function deleteUser(id) {
    users = users.filter((user) => {
      return user.id != id;
    });

    console.log("after delete....", users);
    setusers(users);
  }

  function test(data) {
    // alert("test");
    console.log(data);
  }
  return (
    <div>
      <h1>User UserComponent</h1>
      {props.title}
      {/* <button onClick={test}>Click Me</button> */}
      {/* <button onClick={()=>{test()}}>Click Me</button> */}
      <UserList
        title={props.title}
        users={users}
        test={test}
        delete={deleteUser}
      />
    </div>
  );
};
