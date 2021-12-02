import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import Logo from 'imgs/logo.png';

import './Section01.scss';

const Section01: FC = () => {
  return (
    <Row className="section-01">
      <Row className="header">
        <Col
          lg={6}
          sm={12}
          md={6}
          className="logo d-flex justify-content-center align-items-center"
        >
          <div className="logo-content">
            <Image src={Logo} rounded />
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          md={6}
          className="hotline d-flex justify-content-center align-items-center"
        >
          <div className="phone-icon">
            <PhoneIcon sx={{ color: '#2B2A8F', fontSize: '3rem' }} />
          </div>
          <div className="hotline-content">
            <a href="tel:0000000000">Hotline: 0000 000 000</a>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Section01;
