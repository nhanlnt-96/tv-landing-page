import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import RegisterForm from 'registerForm/RegisterForm';

import './Section09.scss';
import Title from 'title/Title';

const Section09: FC = () => {
  return (
    <Container fluid className="section-09">
      <Container className="section09-container">
        <Title title={'ĐĂNG KÝ NGAY!'} />
        <Row className="section09-form">
          <div className="form-container">
            <p className="form-title">
              Quý Phụ huynh đăng ký Chương trình Làm quen Tiếng Anh Mầm non TAN
              VAN E-LEARNING tại đây!
            </p>
            <RegisterForm />
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Section09;
