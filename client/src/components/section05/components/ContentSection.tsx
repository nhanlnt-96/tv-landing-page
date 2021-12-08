import React, { FC } from 'react';
import { section05Content } from 'configs/section05Content';
import { Col, Row } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ContentSection: FC = () => {
  return (
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
  );
};
