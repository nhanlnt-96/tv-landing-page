import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Section11.scss';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IProps } from 'model/props';
import Title from 'title/Title';

const Section11: FC<IProps> = ({ click }) => {
  return (
    <Container className="section-11">
      <Title
        title={'CÁC BƯỚC ĐĂNG KÝ THAM GIA CHƯƠNG TRÌNH TAN VAN E-LEARNING?'}
      />
      <Row className="section11-content">
        <div className="lp-content section06-child-content">
          <div className="content-item">
            <p>
              Qúy Phụ huynh nhấp vào đường link ĐĂNG KÝ NGAY và nhập thông tin.
            </p>
          </div>
          <div className="content-item">
            <KeyboardDoubleArrowRightIcon />
          </div>
          <div className="content-item">
            <p>
              Chuyên viên Giáo vụ gọi điện thoại tư vấn và hướng dẫn quý Phụ
              huynh tham gia chương trình.
            </p>
          </div>
          <div className="content-item">
            <KeyboardDoubleArrowRightIcon />
          </div>
          <div className="content-item">
            <p>
              Qúy Phụ huynh đóng học phí bằng hình thức chuyển khoản đến Trung
              tâm.
            </p>
          </div>
          <div className="content-item">
            <KeyboardDoubleArrowRightIcon />
          </div>
          <div className="content-item">
            <p>
              Trung tâm gửi tài khoản học tập và hỗ trợ quý Phụ huynh đăng nhập,
              kích hoạt vào hệ thống mở bài học cho con.{' '}
            </p>
          </div>
        </div>
      </Row>
      <Row className="section11-btn">
        <button onClick={click}>ĐĂNG KÝ NGAY</button>
      </Row>
    </Container>
  );
};

export default Section11;
