import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Input from "../shared/components/Input";
import Select from "../shared/components/Select";
import {
  jobPositionDefaultValue,
  jobPositions,
  workingTime,
  workingTimeDefaultValue,
} from "../shared/data";
import { MouseEvent, useState } from "react";
import { NewWorkerType } from "../shared/type";
import { newWorker } from "../shared/storage/storage";
import { WORKERS_STORAGE_KEY } from "../shared/storage/type";

const MyForm = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    jobPosition: jobPositionDefaultValue,
    workingTime: workingTimeDefaultValue,
  };
  const [formData, setFormData] = useState<NewWorkerType>(initialFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    newWorker(formData, WORKERS_STORAGE_KEY);
    setFormData(initialFormData);
  };

  return (
    <Form>
      <Row className="mb-2">
        <Input
          label="Full name"
          controlId="formGridFullName"
          placeholder="Enter full name"
          type="fullName"
          className="mb-2"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <Input
          label="Company email address"
          controlId="formGridEmail"
          placeholder="Enter company email address"
          type="email"
          className="mb-2"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Row>
      <Row className="mb-2">
        <Select
          label="Job position"
          options={jobPositions}
          controlId="formGridJobPosition"
          className="mb-2"
          name="jobPosition"
          value={formData.jobPosition}
          defaultValue={jobPositionDefaultValue}
          onChange={handleSelectChange}
        />

        <Select
          label="Working time"
          options={workingTime}
          controlId="formGridWorkingTime"
          className="mb-2"
          name="workingTime"
          value={formData.workingTime}
          defaultValue={jobPositionDefaultValue}
          onChange={handleSelectChange}
        />
      </Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default MyForm;
