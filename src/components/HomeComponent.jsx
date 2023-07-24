import React from "react";

export const HomeComponent = () => {
  var divstyle = {
    color: "red",
    backgroundColor: "yellow",
  };
  //JSX expression
  //every tag must have closing tag
  // at time only one tag can be returned
  var a = 10;
  var name = "Bhavya";
  var isActive = false;
  var address = {
    city: "Bangalore",
    state: "Karnataka",
    street: {
      name: "1st main",
      pincode: 560001,
    },
  };
  var employees = [
    {
      id: 1,
      name: "Bhavya",
      age: 21,
    },
    {
      id: 2,
      name: "parth",
      age: 22,
    },
    {
      id: 3,
      name: "Rahul",
      age: 23,
    },
  ];
  return (
    <div>
      <div style={divstyle}>div style</div>
      <h1>HELLO.....</h1>
      {a}
      <h1>value of a = {a}</h1>
      <h2>name = {name}</h2>
      <h3>{isActive == true ? "Active" : "Not Active"}</h3>
      <h1>{address.city}</h1>
      <h1>{address.state}</h1>
      <h2>{address.street.name}</h2>

      <h1 style={{ color: "red" }}>ok</h1>

      {/* {
        employees.forEach((emp)=>{
          <h1>{emp.name}</h1>
        })
      }     */}
      {employees.map((emp) => {
        return (
          <div>
            <h1>{emp.id}</h1>
            <h1>
              {emp.age > 21 ? (
                <p style={{ color: "red" }}>{emp.name}</p>
              ) : (
                <p style={{ color: "green" }}>{emp.name}</p>
              )}
            </h1>
            <h1>{emp.age}</h1>
          </div>
        );
      })}
    </div>
  );
};
