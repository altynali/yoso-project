import { FC } from "react";
import Form from "react-bootstrap/Form";
import { FormGroupProps } from "react-bootstrap/esm/FormGroup";
import { MyOptionType } from "../type";
import Col from "react-bootstrap/Col";

export type SelectProps = {
  label: string;
  defaultSelectLabel: string;
  sm?: number;
  options: Array<MyOptionType>;
  className?: string;
} & Pick<FormGroupProps, "as" | "controlId">;

const Select: FC<SelectProps> = (props) => {
  const {
    as = Col,
    label,
    controlId,
    options,
    defaultSelectLabel,
    sm = 6,
    className,
  } = props;

  return (
    <Form.Group className={className} as={as} sm={sm} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        <option disabled value={`default-${controlId}`}>
          {defaultSelectLabel}
        </option>

        {options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
export default Select;
