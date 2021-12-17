import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { diagramContent } from 'configs/diagramContent';

export const Diagram: FC = () => {
  return (
    <Container className="diagram-container">
      <Row className="diagram-items">
        {diagramContent.map((val, index) => (
          <Col key={index} lg={6} md={6} xs={12} className="item">
            <div className="icon">
              <img src={val.icon} alt="8-li-do-chon-tan-van-e-learning" />
            </div>
            <div className="content">
              <p>{val.content}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
