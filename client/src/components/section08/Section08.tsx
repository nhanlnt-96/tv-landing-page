import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Img from 'imgs/section08.jpg';
import { section08Content } from 'configs/section08Content';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './Section08.scss';
import Title from 'title/Title';

const Section08: FC = () => {
  return (
    <Container className="section-08">
      <div className="section08-container">
        <Title title={'TRỌN BỘ SẢN PHẨM TAN VAN E-LEARNING'} />
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
