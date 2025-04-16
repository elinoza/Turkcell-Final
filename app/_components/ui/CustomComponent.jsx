import { useField } from "formik";
import clsx from "clsx";

function CustomComponent({
  label,
  labelClass,
  className,
  as: Component = "input",
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={labelClass}>{label}</label>
      <Component
        {...field}
        {...props}
        className={clsx(
          Component !== "textarea" && "rounded-pill",
          meta.error && "shadow-none error-input ",
          className
        )}
      />

      {meta.error && <div className="error-message">{meta.error}</div>}
    </>
  );
}

export default CustomComponent;
