import { FC } from "react";
import Form from "react-bootstrap/Form";
import { FormGroupProps } from "react-bootstrap/esm/FormGroup";
import { MyOptionType } from "../type";
import Col from "react-bootstrap/Col";
import { FormSelectProps } from "react-bootstrap/esm/FormSelect";

export type SelectProps = {
  label: string;
  defaultSelectLabel?: string;
  sm?: number;
  options: Array<MyOptionType>;
  className?: string;
} & Pick<FormGroupProps, "as" | "controlId"> &
  FormSelectProps;

const Select: FC<SelectProps> = (props) => {
  const {
    as = Col,
    label,
    controlId,
    options,
    defaultValue,
    sm = 6,
    className,
    value,
    onChange,
    name,
  } = props;

  return (
    <Form.Group className={className} as={as} sm={sm} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        value={value || defaultValue}
        onChange={onChange}
        name={name}
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
export default Select;
