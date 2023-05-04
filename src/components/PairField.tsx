import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

interface PairFieldProps {
  id: number;
  changeValue: (id: number, value: string) => void;
  changeVariable: (id: number, variable: string) => void;
}

const PairField = ({
  id,
  changeValue,
  changeVariable,
}: PairFieldProps): JSX.Element => {
  const [currnetVariable, setVariable] = useState<string>("");
  const [currentValue, setValue] = useState<string>("");

  const handleVariableInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVariable(value);
    changeVariable(id, currnetVariable);
  };

  const handleValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    changeValue(id, currentValue);
  };

  return (
    <Form.Group className="mb-2">
      <Row md={10} lg={8}>
        <Col sm>
          <Form.Control
            type="text"
            name="variable"
            placeholder="Переменная"
            onChange={handleVariableInput}
          />
        </Col>
        <Col sm>
          <Form.Control
            type="text"
            name="value"
            placeholder="Значение"
            onChange={handleValueInput}
          />
        </Col>
      </Row>
    </Form.Group>
  );
};

export default PairField;
