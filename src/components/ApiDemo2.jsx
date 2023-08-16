import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ApiDemo2 = () => {
  const [loder, setloder] = useState();
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    setloder(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data.data);
    setusers(res.data.data);
    if (res?.data?.data?.length > 0) {
      setloder(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {

    const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
    console.log(res.status); //204
    if(res.status===204){
        getUsers();   
    }
  }

  return (
    <div>
      {loder ? <h1>Loding...</h1> : null}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">AGE</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "ACTIVE" : "NOT ACTIVE"}</td>
                <td>
                  <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                  <Link to = {`/userdetail/${user._id}`} className="btn btn-primary">DETAIL</Link>
                  <Link to = {`/userupdate/${user._id}`} className="btn btn-warning">EDIT</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
