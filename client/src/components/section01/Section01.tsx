import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RegisterForm from 'registerForm/RegisterForm';
import Header from 'header/Header';
import { IProps } from 'model/props';

import './Section01.scss';

const Section01: FC<IProps> = ({ click }) => {
  return (
    <Container fluid className="section-01">
      <div className="header-section">
        <Header />
      </div>
      <Row>
        <Container fluid className="section01-main-content">
          <Row className="title">
            <div className="title-header">
              <h2>TAN VAN E-LEARNING</h2>
            </div>
            <div className="title-main">
              <h1>CHƯƠNG TRÌNH LÀM QUEN TIẾNG ANH MẦM NON</h1>
            </div>
            <div className="title-footer">
              <h2>DÀNH CHO TRẺ 3-6 TUỔI</h2>
            </div>
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
