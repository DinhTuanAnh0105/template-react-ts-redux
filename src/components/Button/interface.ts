import { ButtonHTMLTypes, ButtonType, Size } from "../../interfaces";

interface ButtonProps {
    title: string;
    size?: Size;
    type?: ButtonType | undefined;
    className?: string;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean | undefined;
    htmlType?: ButtonHTMLTypes,
    icon?: React.ReactNode
}

export default ButtonProps