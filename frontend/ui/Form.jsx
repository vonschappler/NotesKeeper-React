import { DevTool } from "@hookform/devtools";

const Form = ({ children, controller, className, ...props }) => {
  return (
    <>
      <form className={`form ${className}`} {...props}>
        {children}
      </form>
      {controller && <DevTool control={controller} />}
    </>
  );
};

export default Form;
