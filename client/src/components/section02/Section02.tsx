import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Diagram } from 'section02/components';

import './Section02.scss';
import { IProps } from 'model/props';

const Section02: FC<IProps> = ({ click }) => {
  return (
    <Container className="section-02">
      <Row className="section02-title">
        <p>8 LÝ DO ĐỂ QUÝ PHỤ HUYNH LỰA CHỌN TAN VAN E-LEARNING CHO CON</p>
      </Row>
      <Diagram />
      <Row className="section02-register-btn">
        <button onClick={click}>NHẬN TƯ VẤN</button>
      </Row>
    </Container>
  );
};

export default Section02;
