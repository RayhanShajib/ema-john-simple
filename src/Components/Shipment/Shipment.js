import React from 'react';
import './Shipment.css'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../Login/auth';

const Shipment = () => {
     
   const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

const auth = useAuth();

  return (

    <form className="shipform" onSubmit={handleSubmit(onSubmit)}>

      <input name="Name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name" />
      {errors.Name && <span>Name is required</span>}

      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email Address" />
      {errors.email && <span>Email is required</span>}

      <input name="Addressline1" ref={register({ required: true })} placeholder="Enter Your Address" />
      {errors.Addressline1 && <span>Addressline1 is required</span>}

      <input name="Addressline2" ref={register({ required: true })} placeholder="Enter Your Address" />
      {errors.Addressline2 && <span>Addressline2 is required</span>}

      <input name="city" ref={register({ required: true })} placeholder="Enter Your City" />
      {errors.city && <span>City is required</span>}

      <input name="country" ref={register({ required: true })} placeholder="Enter Your Country" />
      {errors.country && <span>Country is required</span>}

      <input name="zipcode" ref={register({ required: true })} placeholder="Zipcode" />
      {errors.zipcode && <span>Zipcode is required</span>}
    
      <input className='submit' type="submit" />
    </form>


     
    );
};

export default Shipment;