import React from "react";
import { useForm } from "react-hook-form";

export const DynamicForm = () => {
  const formData = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter Name",
      name: "name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
      name: "email",
    },
    {
      label: "male",
      type: "radio",
      name: "gender",
      value: "male",
    },
    {
      label: "female",
      type: "radio",
      name: "gender",
      value: "female",
    },
    {
      label: "java",
      type: "checkbox",
      name: "skills",
      value: "java",
    },
    {
      label: "html",
      type: "checkbox",
      name: "skills",
      value: "HTML",
    },
    {
      label: "css",
      type: "checkbox",
      name: "skills",
      value: "css",
    },
    {
      lable: "SELECT country",
      type: "select",
      name: "country",
      options: [
        {
          label: "India",
          value: "india",
        },
        {
          label: "USA",
          value: "usa",
        },
        {
          label: "UK",
          value: "uk",
        },
      ],
    },
  ];
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log("data...", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        {formData?.map((form) => {
          return (
            <div>
              {form.type !== "select" ? (
                <>
                  <label>{form.label}</label>
                  <input
                    type={form.type}
                    placeholder={form.placeholder}
                    name={form.name}
                    {...register(form?.name)}
                    value={form?.value}
                  />
                </>
              ) : (
                <select name={form.name} {...register(form?.name)}>
                  {form.options.map((option) => {
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              )}
            </div>
          );
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
