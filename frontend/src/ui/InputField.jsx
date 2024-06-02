import { TextField as BaseTextField } from "@mui/material";
import { forwardRef } from "react";
import FormError from "./FormError";

const TextField = forwardRef((props, ref) => {
  return <BaseTextField ref={ref} {...props} />;
});
TextField.displayName = "TextField";

const InputField = ({ ...props }) => {
  const { register, errors } = props;
  return (
    <div>
      <BaseTextField {...register} {...props} />
      {errors && <FormError text={errors.message} />}
    </div>
  );
};

export default InputField;
