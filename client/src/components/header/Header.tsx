import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from 'imgs/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';

import './Header.scss';

const Header: FC = () => {
  return (
    <Row className="header">
      <div className="header-container">
        <Col
          lg={6}
          sm={12}
          md={6}
          className="logo d-flex justify-content-center align-items-center"
        >
          <div className="logo-content">
            <Image src={Logo} rounded />
            <div className="img-desc">
              <p className="title d-flex" style={{ color: '#028139' }}>
                HỆ THỐNG GIÁO DỤC{' '}
                <p style={{ color: '#FC161B', marginLeft: '5px' }}> TÂN VĂN</p>
              </p>
              <p className="subtitle" style={{ color: '#3336D0' }}>
                Tan Van Education System
              </p>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          md={6}
          className="hotline d-flex justify-content-center align-items-center"
        >
          <div className="hotline-container">
            <div className="phone-icon">
              <PhoneIcon sx={{ color: '#2B2A8F', fontSize: '3rem' }} />
            </div>
            <div className="hotline-content">
              <a href="tel:0918291313">Hotline: 0918291313 – 0916119117</a>
            </div>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Header;
