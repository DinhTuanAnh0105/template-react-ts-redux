import { Input as InputAntd } from "antd";
import { ErrorMessage } from "formik";
import InputProps from "./interface";

const Input = ({
  name,
  size,
  type,
  value,
  onChange,
  placeholder,
  className,
  form,
  onBlur,
  disabled,
  ...props
}: InputProps<any, any>) => {
  const inputName = name || props?.field?.name || "";
  const inputValue = value || props.field?.value;
  const inputOnChange = onChange || props.field?.onChange;
  const inputOnBlur = onBlur || props.field?.onBlur;
  const { errors, touched } = form ?? {};
  return (
    <div>
      <InputAntd
        name={inputName}
        disabled={disabled}
        size={size}
        type={type}
        value={inputValue}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        placeholder={placeholder}
        className={`custom_input ${className}`}
      />
      {touched?.[inputName] && errors?.[inputName] && (
        <span className="span_error">
          <ErrorMessage name={inputName || ""}  />
        </span>
      )}
    </div>
  );
};

export default Input;
