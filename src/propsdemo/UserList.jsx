import React from "react";

export const UserList = (props) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={()=>props.delete(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
