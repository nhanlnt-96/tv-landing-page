import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Img from 'imgs/section08.png';
import { section08Content } from 'configs/section08Content';

import './Section08.scss';

const Section08: FC = () => {
  return (
    <Container className="section-08">
      <div className="section08-container">
        <Row className="section08-title">
          <p>TRỌN BỘ SẢN PHẨM TÂN VĂN ELEARNING</p>
        </Row>
        <Row className="section08-img">
          <img src={Img} alt="tv-elearning" />
        </Row>
        <Row className="section08-content">
          <ul>
            {section08Content.map((val, index) => (
              <li key={index}>
                <FiberManualRecordIcon />
                {val}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </Container>
  );
};

export default Section08;
