import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AppContext } from './context';

export const AddCountry = () => {
  const {  dispactchAction } = useContext(AppContext);
  const {register,handleSubmit} = useForm();
  const submitHandler = (data) => {

    console.log(data);
    dispactchAction("add-country",data);
  }
  return (
    <div>AddCountry
      <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" {...register("name")} />
      </div>
      <div className="form-group">
        <label htmlFor="continent">Continent</label>
        <input type="text" className="form-control" {...register("continent")} />
      </div>
      <div className="form-group">
        <label htmlFor="population">Population</label>
        <input type="text" className="form-control" {...register("population")} />
      </div>
      <div className="form-group">
        <label htmlFor="capital">Capital</label>
        <input type="text" className="form-control" {...register("capital")} />
      </div>
      <input type="submit" className="btn btn-primary" value="ADD"></input>

      </form>
    </div>
    
  )
}
