import { DevTool } from "@hookform/devtools";
const isDev = import.meta.env.DEV ?? false;
// console.log(isDev);

const Form = ({ children, controller, className, ...props }) => {
  return (
    <>
      <form className={`${className}`} {...props}>
        {children}
      </form>
      {isDev && controller && <DevTool control={controller} />}
    </>
  );
};

export default Form;
