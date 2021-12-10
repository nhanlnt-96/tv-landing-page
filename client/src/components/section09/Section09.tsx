import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import RegisterForm from 'registerForm/RegisterForm';

import './Section09.scss';

const Section09: FC = () => {
  return (
    <Container fluid className="section-09">
      <Container className="section09-container">
        <Row className="section09-title">
          <p>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ TỪ TÂN VĂN</p>
        </Row>
        <Row className="section09-form">
          <div className="form-container">
            <p className="form-title">
              Phụ huynh đăng ký nhận tư vấn Miễn Phí từ Edupia Kid tại đây!
            </p>
            <RegisterForm />
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Section09;
