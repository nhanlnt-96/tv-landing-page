import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { section05Content } from 'configs/section05Content';

import './Section05.scss';

const Section05: FC = () => {
  return (
    <Container className="section-05">
      <Row className="section05-title">
        <h6>LỘ TRÌNH HỌC TOÀN DIỆN TỪ CƠ BẢN ĐẾN NÂNG CAO </h6>
      </Row>
      <Row className="section05-content">
        {section05Content.map((val, index) => (
          <Col key={index} className="content-item">
            <div className="img-item">
              <div className="img-content">
                <p>GIAI ĐOẠN {val.step}:</p>
                <p>{val.title}</p>
              </div>
            </div>
            <div className="content">
              <div className="icon-item">
                {val.step > 1 && <ArrowForwardIosIcon />}
              </div>
              <p>{val.content}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Section05;
