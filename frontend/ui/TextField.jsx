import React from "react";
import FormError from "./FormError";

const TextField = ({ ...props }) => {
  const { register, errors } = props;
  return (
    <div>
      <textarea {...register} {...props} />
      {errors && <FormError text={errors.message} />}
    </div>
  );
};

export default TextField;
