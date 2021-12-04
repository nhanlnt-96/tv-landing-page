import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ResgiterForm.scss';

const RegisterForm: FC = () => {
  return (
    <Form className="form-items">
      <Form.Group className="mb-3 item">
        <Form.Control type="text" placeholder="Họ tên phụ huynh" />
      </Form.Group>
      <Form.Group className="mb-3 item">
        <Form.Control type="text" placeholder="Số điện thoại" />
      </Form.Group>
      <Form.Group className="mb-3 item">
        <Form.Select aria-label="Default select example">
          <option>Chọn lớp của bé</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <span>Chuyên viên Tân Văn sẽ gọi điện hỗ trợ</span>
      <span>Quý khách đăng ký!</span>
      <Button className="mt-3">Đăng ký</Button>
    </Form>
  );
};

export default RegisterForm;
