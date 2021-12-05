import React, { FC, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { classes } from 'configs/classes';
import { nameRegex, phoneRegex } from 'shared/regex';
import './ResgiterForm.scss';

interface IUserInfo {
  fullName?: string;
  phoneNumber?: string;
  classes?: string;
}

const RegisterForm: FC = () => {
  const [formInput, setFormInput] = useState<IUserInfo>({
    fullName: '',
    phoneNumber: '',
    classes: '',
  });
  const [errors, setErrors] = useState<IUserInfo>({});
  const onGetInputHandler = (field: string, value: string) => {
    setFormInput({
      ...formInput,
      [field]: value,
    });
  };
  const validateInput = () => {
    const { fullName, phoneNumber, classes } = formInput;
    const newErrors: IUserInfo = {};
    if ((fullName && !nameRegex.test(fullName)) || !fullName) {
      newErrors.fullName =
        'Họ tên nhập vào không được để trống, không được chứa số, hoặc các' +
        ' ký tự đặc biệt.';
    }

    if ((phoneNumber && !phoneRegex.test(phoneNumber)) || !phoneNumber) {
      newErrors.phoneNumber = 'Số điện thoại sai hoặc Bạn chưa nhập số điện' +
        ' thoại.';
    }

    if (!classes) {
      newErrors.classes = 'Vui lòng chọn lớp học của bé.';
    }

    return newErrors;
  };
  const onRegisterBtnClick = async () => {
    const newErrors = validateInput();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const response = await axios.post(
        'https://tv-register-api.herokuapp.com/register', { formInput }
      );
      console.log(response);
    }
  };
  return (
    <Form className="form-items">
      <Form.Group className="mb-3 item">
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Họ tên phụ huynh"
          onChange={(e) => onGetInputHandler('fullName', e.target.value)}
          isInvalid={!!errors.fullName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.fullName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 item">
        <Form.Control
          type="text"
          name="phoneNumber"
          placeholder="Số điện thoại"
          onChange={(e) => onGetInputHandler('phoneNumber', e.target.value)}
          isInvalid={!!errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 item">
        <Form.Select
          aria-label="Default select example"
          name="classes"
          onChange={(e) => onGetInputHandler('classes', e.target.value)}
          isInvalid={!!errors.classes}
        >
          <option selected disabled>
            Chọn lớp của bé
          </option>
          {classes.map((val, index) => (
            <option key={val.value} value={val.label}>
              {val.label}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.classes}
        </Form.Control.Feedback>
      </Form.Group>
      <span>Chuyên viên Tân Văn sẽ gọi điện hỗ trợ</span>
      <span>Quý khách đăng ký!</span>
      <Button
        className="mt-3"
        onClick={onRegisterBtnClick}
        disabled={
          (!formInput.fullName ||
            !formInput.phoneNumber ||
            !formInput.classes) &&
          true
        }
      >
        Đăng ký
      </Button>
    </Form>
  );
};

export default RegisterForm;
