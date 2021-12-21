import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Diagram } from 'section02/components';
import { IProps } from 'model/props';

import './Section02.scss';
import Title from 'title/Title';

const Section02: FC<IProps> = ({ click }) => {
  return (
    <Container className="section-02">
      <Title
        title={'8 LÝ DO ĐỂ QUÝ PHỤ HUYNH LỰA CHỌN TAN VAN E-LEARNING CHO CON'}
      />
      <Diagram />
      <Row className="section02-register-btn">
        <button onClick={click}>ĐĂNG KÝ NGAY</button>
      </Row>
    </Container>
  );
};

export default Section02;
