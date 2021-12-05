import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { classes } from 'configs/classes';
import { nameRegex, phoneRegex } from 'shared/regex';
import { IUser } from 'models/users';
import { appendSpreadsheet } from 'boot/googleSpreadsheet';
import './ResgiterForm.scss';

const RegisterForm: FC = () => {
  const initialInput: IUser = {
    fullName: '',
    phoneNumber: '',
    classes: '',
  };
  const [formInput, setFormInput] = useState<IUser>(initialInput);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onGetInputHandler = (field: string, value: string) => {
    setFormInput({
      ...formInput,
      [field]: value,
    });
  };
  const validateInput = () => {
    const { fullName, phoneNumber, classes } = formInput;
    const newErrors: any = {};
    if ((fullName && !nameRegex.test(fullName)) || !fullName) {
      newErrors.fullName =
        'Họ tên nhập vào không được để trống, không được chứa số, hoặc các' +
        ' ký tự đặc biệt.';
    }

    if ((phoneNumber && !phoneRegex.test(phoneNumber)) || !phoneNumber) {
      newErrors.phoneNumber =
        'Số điện thoại sai hoặc Bạn chưa nhập số điện thoại.';
    }

    if (!classes) {
      newErrors.classes = 'Vui lòng chọn lớp học của bé.';
    }

    return newErrors;
  };
  const onRegisterBtnClick = async () => {
    const newErrors = validateInput();
    setIsLoading(true);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
    } else {
      const { fullName, phoneNumber, classes } = formInput;
      const res = await appendSpreadsheet({
        fullName,
        phoneNumber,
        classes,
        status: 'Chưa liên hệ',
      });
      if (res?._rawData) {
        setIsLoading(false);
        setFormInput(initialInput);
        navigate('/thanks');
      }
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
          defaultValue=""
          isInvalid={!!errors.classes}
        >
          <option value="" disabled>
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
            !formInput.classes ||
            isLoading) &&
          true
        }
      >
        {isLoading ? 'Đang đăng ký' : 'Đăng ký'}
      </Button>
    </Form>
  );
};

export default RegisterForm;
