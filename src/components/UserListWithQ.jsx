import React, { useEffect } from "react";
import { useFetchUserData } from "../query/UserQuery";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
// npm install react-bootstrap 
// npm install bootstrap

export const UserListWithQ = () => {
  const { data, isLoading, isError, refetch } = useFetchUserData();
  useEffect(() => {
    console.log("data..", data);
    console.log("isLoading..", isLoading);
    console.log("isError..", isError);
  }, [isLoading]);

  return (
    <div>
      <button
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </button>
      <h1>UserListWithQ</h1>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : isError ? (
        <h1>Error...</h1>
      ) : (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data?.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
