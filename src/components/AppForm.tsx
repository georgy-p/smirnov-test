import { Container, Row, Col } from "react-bootstrap";
import FileDownloader from "./FileDownloader";
import PairField from "./PairField";
import PairFiledBtns from "./PairFieldBtns";
import DownloadAndViewBtn from "./DownloadAndViewBtn";
import { useMemo, useState } from "react";

type FieldsColl = Array<React.ReactElement>;

type VaribleElement = {
  variable: string;
  value: string;
};

interface VariblesColl {
  [id: number]: VaribleElement;
}

const AppForm = () => {
  const [fieldCount, setFieldCount] = useState<number>(1);
  const [data, setData] = useState<VariblesColl>({});

  //Тип any тут указан временно. Когда подключу загрузку изменю тип.
  const [file, setFile] = useState<string>("empty");

  const handleDownload = (): void => {
    setFile("File downloaded");
    console.log(file);
  };
  const changeValue = (id: number, value: string): void => {
    setData({ ...data, [id]: { ...data[id], value: value } });
  };

  const changeVariable = (id: number, variable: string): void => {
    setData({ ...data, [id]: { ...data[id], variable: variable } });
  };

  const pairField: FieldsColl = useMemo(() => {
    const result: Array<React.ReactElement> = [];
    const newData: VariblesColl = {};

    for (let i = 1; i <= fieldCount; i += 1) {
      newData[i] = { variable: "", value: "" };
      result.push(
        <PairField
          key={i}
          id={i}
          changeValue={changeValue}
          changeVariable={changeVariable}
        />
      );
    }
    setData(newData);
    return result;
  }, [fieldCount]);

  const handleFieldAdd = (): void => {
    setFieldCount(fieldCount + 1);
  };

  const handleFieldRemove = () => {
    if (fieldCount === 1) {
      return;
    }
    setFieldCount(fieldCount - 1);
  };

  console.log(data);

  return (
    <Container className="mb-2 bg-warning">
      <Row className="justify-content-center">
        <Col lg={10} xl={9} className="rounded bg-light mt-2 mb-5 p-4">
          <Row>
            <FileDownloader handleDownload={handleDownload} />
          </Row>
          <Row>{pairField.map((field) => field)}</Row>
          <Row className="mt-4">
            <PairFiledBtns
              addField={handleFieldAdd}
              removeField={handleFieldRemove}
            />
          </Row>
          <Row className="mb-3">
            <DownloadAndViewBtn />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AppForm;
