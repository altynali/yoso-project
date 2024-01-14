import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Input from "../shared/components/Input";
import Select from "../shared/components/Select";
import { jobPositions, workingTime } from "../shared/data";

const MyForm = () => {
  return (
    <Form>
      <Row className="mb-2">
        <Input
          label="Full name"
          controlId="formGridFullName"
          placeholder="Enter full name"
          type="fullName"
          className="mb-2"
        />

        <Input
          label="Company email address"
          controlId="formGridEmail"
          placeholder="Enter company email address"
          type="email"
          className="mb-2"
        />
      </Row>
      <Row className="mb-2">
        <Select
          defaultSelectLabel="Select job position"
          label="Job position"
          options={jobPositions}
          controlId="formGridJobPosition"
          className="mb-2"
        />

        <Select
          defaultSelectLabel="Select working time"
          label="Working time"
          options={workingTime}
          controlId="formGridWorkingTime"
          className="mb-2"
        />
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default MyForm;
