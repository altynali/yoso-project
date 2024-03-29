import { FC } from "react";
import Form from "react-bootstrap/Form";
import { FormGroupProps } from "react-bootstrap/esm/FormGroup";
import Col from "react-bootstrap/Col";
import { FormControlProps } from "react-bootstrap/esm/FormControl";

export type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  sm?: number;
  className?: string;
  name?: string;
} & Pick<FormGroupProps, "as" | "controlId"> &
  FormControlProps;

const Input: FC<InputProps> = (props) => {
  const {
    as = Col,
    label,
    controlId,
    type,
    placeholder,
    sm = 6,
    className,
    value,
    onChange,
    name,
  } = props;

  return (
    <Form.Group className={className} as={as} sm={sm} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Form.Group>
  );
};
export default Input;
