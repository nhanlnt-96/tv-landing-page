import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { diagramContent } from 'configs/diagramContent';

export const Diagram: FC = () => {
  return (
    <Container className="diagram-container">
      {diagramContent.map((val, index) => (
        <Row key={index} className="diagram-items">
          <Col lg={2} md={2} sm={3} className="icon-item">
            <div className="circle">
              <AddIcon />
            </div>
            <div className="line" />
          </Col>
          <Col lg={10} md={10} sm={9} className="content-item">
            <p>{val.content}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
