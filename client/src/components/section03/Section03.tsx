import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import Bg from 'imgs/uri.png';
import { section03Content } from 'configs/section03Content';
import { IProps } from 'model/props';

import './Section03.scss';

const Section03: FC<IProps> = ({ click }) => {
  return (
    <Container className="section-03">
      <Row className="section03-title">
        <h6>
          CHỈ <span style={{ color: '#ff0000' }}>15 PHÚT MỖI NGÀY</span> TRÊN
          TAN VAN E-LEARNING CON VỪA HỌC VỪA CHƠI VỚI CHƯƠNG TRÌNH LÀM QUEN
          TIẾNG ANH MẦM NON
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
      <Row className="section03-register-btn">
        <button onClick={click}>ĐĂNG KÝ NGAY</button>
      </Row>
    </Container>
  );
};

export default Section03;
