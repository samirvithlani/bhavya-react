import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const getApi = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(res.data.data);
    setusers(res.data.data);
  };

  return (
    <div>
      ApiDemo1
      <button
        onClick={() => {
          getApi();
        }}
      >
        Get Api
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user)=>{
              return(
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td><img src={user.avatar} alt="avatar" /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};
