import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from 'imgs/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';

import './Header.scss';

const Header: FC = () => {
  return (
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
  );
};

export default Header;
