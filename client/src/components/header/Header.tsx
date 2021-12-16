import React, { FC, useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from 'imgs/logo.png';
import { useWindowSize } from 'helpers/useWindowSize';
import PhoneIcon from '@mui/icons-material/Phone';

import './Header.scss';

const Header: FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const currentWidth = useWindowSize();
  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <Row className="header">
      <div
        className="header-container"
        style={{
          backgroundColor:
            offsetY !== 0 && currentWidth >= 768 ? '#ffffff' : '',
        }}
      >
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
          <div className="hotline-container">
            <div className="phone-icon">
              <PhoneIcon sx={{ color: '#2B2A8F', fontSize: '3rem' }} />
            </div>
            <div className="hotline-content">
              <a href="tel:0000000000">Hotline: 0000 000 000</a>
            </div>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Header;
