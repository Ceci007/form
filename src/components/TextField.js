import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { useSpring, animated } from "react-spring";
import "./TextField.css";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  const errorAppear = useSpring({
    transform: error ? "translate3D(0,0,0)" : "translate3D(0,-20px,0)",
    opacity: error ? 1 : 0
  });

  return (
    <div className="mb-2 input-container">
      <label className='label' htmlFor={field.name}>{label}</label>
      <div className={`form-control-outer ${touched && error && 'is-invalid'}`}>
      <input
        className="form-control"
        {...field} {...props}
        autoComplete="off"
      />
      {(touched && error) ?
        <animated.div style={errorAppear}>
          <ErrorMessage component="div" name={field.name} className="error"/>
        </animated.div> : null
      }
      </div>
    </div>
  )
}
