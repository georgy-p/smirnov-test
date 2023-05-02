import { Container, Row } from "react-bootstrap";
import FileDownloader from "./FileDownloader";
import PairField from "./PairField";

const AppForm = () => {
  return (
    <Container>
      <Row>
        <FileDownloader />
      </Row>
      <Row>
        <PairField />
      </Row>
      <Row>Кнопки просморта и загрузки</Row>
    </Container>
  );
};

export default AppForm;
