import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from 'imgs/logo.png';

import './Section01.scss';

const Section01: FC = () => {
  return (
    <div className="section-01">
      <Row className="header">
        <Col xs={6}>
          <Image src={Logo} rounded />
        </Col>
        <Col xs={6}>sdfsdgfsfgd</Col>
      </Row>
    </div>
  );
};

export default Section01;
