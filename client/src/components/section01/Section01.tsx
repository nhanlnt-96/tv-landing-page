import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RegisterForm from 'registerForm/RegisterForm';
import Header from 'header/Header';

import './Section01.scss';

interface IProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
}

const Section01: FC<IProps> = ({ click }) => {
  return (
    <Container fluid className="section-01">
      <Header />
      <Row>
        <Container fluid className="section01-main-content">
          <Row className="title">
            <h1>Chương trình tiếng anh khởi đầu cho trẻ 3-7 tuổi</h1>
          </Row>
          <Row className="detail-btn">
            <button onClick={click}>TÌM HIỂU THÊM</button>
          </Row>
          <Container className="register-form">
            <Row>
              <Col
                sm={12}
                md={6}
                lg={6}
                className="register-desc col-height d-flex flex-column justify-content-center align-items-center"
              >
                <h2 className="register-title">NHẬN TƯ VẤN MIỄN PHÍ</h2>
                <p className="register-subtitle">
                  Ba mẹ đăng ký để nhận tư vấn Miễn Phí chương trình tiếng Anh
                  online cho trẻ trên Tân Văn eLearning tại đây:
                </p>
              </Col>
              <Col sm={12} md={6} lg={6} className="border-left-line">
                <RegisterForm />
              </Col>
            </Row>
          </Container>
        </Container>
      </Row>
    </Container>
  );
};

export default Section01;
