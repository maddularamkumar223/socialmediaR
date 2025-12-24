import React from "react";

const Form = ({ data, handleChange }) => {
  return (
    <>
      {data.map((value) => {
        return (
          <article key={value.name}>
            <label htmlFor="">{value.name}</label>
            <input
              type={value.type}
              name={value.name}
              value={value.value}
              onChange={handleChange}
            />
          </article>
        );
      })}
    </>
  );
};

export default Form;
