import React, { useState } from "react";

export const StudentReg = () => {
  const [name, setname] = useState(""); //string
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [skills, setskills] = useState([]); //array
  const [isACtive, setisACtive] = useState(false); //boolean
  const [age, setage] = useState(); //any
  const [country, setcountry] = useState("");
  const nameHandler = (e) => {
    //console.log(e)

    console.log(e.target.value);
    setname(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name is " + name);
    console.log("email is " + email);
    console.log("gender" + gender);
    var obj = {
        name: name,
        email: email,
        
    }
  };
  return (
    <div>
      <h1>STUDENT REGISTRATION</h1>
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label>NAME</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => nameHandler(e)}
            />
            {name}
          </div>
          <div>
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
            {email}
          </div>
          <div>
            <label>GENDER</label>
            <br />
            MALE :{" "}
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={(e) => setgender(e.target.value)}
            ></input>{" "}
            <br />
            FEMALE :{" "}
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={(e) => setgender(e.target.value)}
            ></input>{" "}
            <br />
            {gender}
          </div>
          <div>
            <label>SKILLS</label>
            <br />
            HTML
            <input
              type="checkbox"
              value="HTML"
              name="skills"
              onChange={(e) => {
                setskills([...skills, e.target.value]);
              }}
            ></input>
            CSS
            <input
              type="checkbox"
              value="css"
              name="skills"
              onChange={(e) => {
                setskills([...skills, e.target.value]);
              }}
            ></input>
            JS
            <input
              type="checkbox"
              value="js"
              name="skills"
              onChange={(e) => {
                setskills([...skills, e.target.value]);
              }}
            ></input>
            REACT
            <input
              type="checkbox"
              value="react"
              name="skills"
              onChange={(e) => {
                setskills([...skills, e.target.value]);
              }}
            ></input>
            <div>
              {skills?.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
          </div>
          <div>
            <select
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            >
              <option value="india">INDIA</option>
              <option value="usa">USA</option>
              <option value="canada">CANADA</option>
            </select>
            {country}
          </div>
          <div>
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};
