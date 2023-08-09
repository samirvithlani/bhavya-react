import React from "react";
import { useForm } from "react-hook-form";

export const UserReg = () => {
  //register is a array of objects
  //handleSubmit is a function
  //formState is a object {errors}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors...", errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "name is required...",
      },
    },
    email: {
      required: {
        value: true,
        message: "email is required...",
      },
      maxLength: {
        value: 20,
        message: "max length is 20...",
      },
    },
  };

  return (
    <div>
      <h1>USER REGISTRATION...</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            // {...register("name", {
            //   required: { value: true, message: "name is required..." },
            // })}
            {...register("name", validationSchema.name)}
          ></input>
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>EMAIL</label>
          <input
            type="email"
            {...register("email", validationSchema.email)}
          ></input>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE :{" "}
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          ></input>
          <br></br>
          FEMALE :{" "}
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>COUNTRY</label>
          <select {...register("country")}>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <label>LANGUAGES</label>
          <select {...register("languages")} multiple>
            <option value="english">ENGLISH</option>
            <option value="hindi">HINDI</option>
            <option value="telugu">TELUGU</option>
          </select>
        </div>
        <div>
          <label>Skilss</label>
          <br></br>
          JAVA{" "}
          <input type="checkbox" value="java" {...register("skills")}></input>
          HTML{" "}
          <input type="checkbox" value="html" {...register("skills")}></input>
          CSS{" "}
          <input type="checkbox" value="css" {...register("skills")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
