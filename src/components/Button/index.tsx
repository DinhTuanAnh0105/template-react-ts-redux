import { Button as ButtonAntd } from "antd";
import ButtonProps from "./interface";

const Button = ({ icon, loading, disabled, title, size, type, className, onClick, htmlType }: ButtonProps) => {
  return (
    <ButtonAntd icon={icon} loading={loading} disabled={disabled} size={size} type={type} htmlType={htmlType} className={className} onClick={onClick}>
      {title}
    </ButtonAntd>
  );
};

export default Button;
