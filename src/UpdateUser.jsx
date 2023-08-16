import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {

    var naviagate = useNavigate();
  var id = useParams().id;
  const updateUser = async (data) => {
    console.log(data);
    var userObj = {
        name: data.name,
        email: data.email,
        age: data.age,
        isActive: data.isActive =="true" ? true : false,
    }
    // var userObj = {
    //   name: "raj",
    //   email: "raj@mail.in",
    //   age: 24,
    //   isActive: true,
    // };
    const res = await axios.put(
      "https://node5.onrender.com/user/user/" + id,
      userObj
    );
    console.log(res.data.data);
    
    if(res.status===200){
        naviagate("/apidemo2");
    }
  };

  const {register,handleSubmit,formState:{errors}} = useForm(
    {
        
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id);
            return res.data.data;
        }
    }
  );


  return <div>UpdateUser
    {/* <button onClick={()=>{updateUser()}}>Update User</button> */}
    <form onSubmit={handleSubmit(updateUser)}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")}/>
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" {...register("age")}/>
        </div>
        <div>
            <label htmlFor="isActive">isActive</label>
            TRUE : <input type="radio" id="isActive" value ="true" {...register("isActive")}/>
            FALSE : <input type="radio" id="isActive" value = "false" {...register("isActive")}/>
        </div>
        <div>
            <input type="submit" value="Update User"/>
        </div>

    </form>
  </div>;
};
