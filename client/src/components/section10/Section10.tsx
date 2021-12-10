import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { section10Content } from 'configs/section10Content';
import Logo from 'imgs/logo.png';
import Youtube from 'imgs/youtube.png';
import Facebook from 'imgs/facebook.png';
import WebLink from 'imgs/web-link.png';

import './Section10.scss';

const Section10: FC = () => {
  return (
    <Container fluid className="section-10">
      <Row className="section10-content">
        <Col lg={8} md={8} className="company-info">
          <h6>TRUNG TÂM NGOẠI NGỮ TÂN VĂN</h6>
          <div className="company-address">
            {section10Content.map((val, index) => (
              <div key={index} className="address-item">
                <div className="title">
                  <p>
                    <b>{val.title}:</b>
                  </p>
                </div>
                <div className="address">
                  <p>{val.address}</p>
                </div>
                <div className="phone">
                  <p>
                    <b>Điện thoại:</b> {val.phoneNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="company-email">
            <p>
              <b>Email: </b>
            </p>
          </div>
          <div className="company-website">
            <p>
              <b>Website: </b>http://www.hethonggiaoductanvan.edu.vn
            </p>
          </div>
          <div className="company-hotline">
            <p>
              <b>Hotline: </b>
            </p>
          </div>
        </Col>
        <Col lg={4} md={4} className="company-social">
          <h6>Chương trình tiếng Anh online chất lượng cao</h6>
          <div className="social-icon">
            <a href="https://www.facebook.com/Tan-Van-Education-System-388130665159447/">
              <img src={Facebook} alt="tv-facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCh6YOFj4qLxvAXVGlB_MazA/featured">
              <img src={Youtube} alt="tv-youtube" />
            </a>
            <a href="https://tanvan.lcms.vn/" target="_blank">
              <img src={WebLink} alt="tv-web" />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="section10-logo">
        <img src={Logo} alt="tv-logo" />
      </Row>
    </Container>
  );
};

export default Section10;
