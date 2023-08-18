import { FieldInputProps, FormikState, FormikHelpers } from "formik";
import { Size } from "../../../interfaces";

interface ICustomFieldInputProps<T, V> {
  children?: any;
  field?: FieldInputProps<T>;
  form?: FormikHelpers<V> & FormikState<any>;
}
interface InputProps<T, V> extends ICustomFieldInputProps<any, any> {
  size?: Size;
  type?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  name?: string;
  props?: any;
  field?: FieldInputProps<T>;
  form?: FormikHelpers<V> & FormikState<any>;
  disabled?: boolean;
}

export default InputProps;
