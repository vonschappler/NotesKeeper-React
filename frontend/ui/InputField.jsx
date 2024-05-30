import FormError from "./FormError";

const InputField = ({ ...props }) => {
  const { register, errors } = props;
  return (
    <div>
      <input {...register} {...props} />
      {errors && <FormError text={errors.message} />}
    </div>
  );
};

export default InputField;
