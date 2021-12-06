import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import Bg from 'imgs/img01.png';
import './Section03.scss';
import { section03Content } from 'configs/section03Content';

const Section03: FC = () => {
  return (
    <Container fluid className="section-03">
      <Row className="section03-title">
        <h6>
          CHỈ <span style={{ color: '#ff0000' }}>30 PHÚT/NGÀY</span> TRÊN EDUPIA
          KID - CON HỨNG THÚ VÀ TỰ TIN PHÁT ÂM CHUẨN
        </h6>
      </Row>
      <Row className="section03-content">
        <Col lg={8} md={8} sm={12} className="content">
          {section03Content.map((val, index) => (
            <p key={index}>
              <StarIcon />
              {val.content}
            </p>
          ))}
        </Col>
        <Col lg={4} md={4} sm={12} className="section03-img">
          <img src={Bg} alt="tv-section-03" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section03;
