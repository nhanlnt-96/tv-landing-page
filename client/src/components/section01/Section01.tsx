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
            <div className="item">
              <h1>
                Chương trình làm quen tiếng anh mầm non Tan Van E-Learning
              </h1>
              <h1>dành cho trẻ 3-6 tuổi</h1>
            </div>
          </Row>
          <Row className="section01-btn">
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
                <h2 className="register-title">ĐĂNG KÝ NGAY</h2>
                <p className="register-subtitle">
                  Chương trình ưu đãi dành riêng cho bé học tại{' '}
                  <strong style={{ color: '#ff0000' }}>
                    308 trường Mầm non
                  </strong>{' '}
                  liên kết với
                </p>
                <strong>Trung Tâm Ngoại Ngữ Tân Văn</strong>
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
