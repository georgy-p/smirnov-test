import { Col, Form } from "react-bootstrap";

interface DownloadProps {
  handleDownload: () => void;
}

const FileDownloader = ({ handleDownload }: DownloadProps) => {
  const handleChange = () => {
    handleDownload();
  };

  return (
    <Col md={6} lg={6}>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Исходный документ</Form.Label>
        <Form.Control type="file" onChange={handleChange} />
      </Form.Group>
    </Col>
  );
};

export default FileDownloader;
