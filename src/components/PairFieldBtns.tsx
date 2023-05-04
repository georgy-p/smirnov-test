import { Button, Col, Row } from "react-bootstrap";
import { TiDocumentAdd, TiDocumentDelete } from "react-icons/ti";

interface PairFieldBtnsProps {
  addField: () => void;
  removeField: () => void;
}

const PairFieldBtns = ({ addField, removeField }: PairFieldBtnsProps) => {
  return (
    <Col className="d-flex">
      <Row className="g-2">
        <Col>
          <Button onClick={addField} variant="success" size="lg">
            <TiDocumentAdd />
          </Button>
        </Col>
        <Col>
          <Button onClick={removeField} variant="danger" size="lg">
            <TiDocumentDelete />
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default PairFieldBtns;
