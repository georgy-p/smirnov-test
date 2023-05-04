import { Button, Col, Row } from "react-bootstrap";
import { TiDownload, TiEyeOutline } from "react-icons/ti";

const DownloadAndViewBtn = () => {
  return (
    <Col className="d-flex justify-content-end mt-2">
      <Row className="g-2">
        <Col>
          <Button variant="primary">
            <Row className="d-flex flex-nowrap g-1">
              <Col>
                <TiDownload />
              </Col>
              <Col>Загрузить</Col>
            </Row>
          </Button>
        </Col>
        <Col>
          <Button variant="secondary">
            <Row className="d-flex flex-nowrap g-1">
              <Col>
                <TiEyeOutline />
              </Col>
              <Col>Предпросмотр</Col>
            </Row>
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default DownloadAndViewBtn;
