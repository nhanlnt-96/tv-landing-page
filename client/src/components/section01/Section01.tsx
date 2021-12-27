import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import RegisterForm from 'registerForm/RegisterForm';
import Header from 'header/Header';
import {IProps} from 'model/props';

import './Section01.scss';
import AnimateText from 'animateText/AnimateText';

const Section01: FC<IProps> = ({click}) => {
    return (
        <Container fluid className="section-01">
            <div className="header-section">
                <Header/>
            </div>
            <Row>
                <Container fluid className="section01-main-content">
                    <Row className="title">
                        <div className="item">
                            <h1>
                                Chương trình Làm quen Tiếng Anh Mầm non TAN VAN E-LEARNING
                            </h1>
                            <h1>Dành cho trẻ 3-6 tuổi</h1>
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
                                {/*<h2 className="register-title">ĐĂNG KÝ NGAY</h2>*/}
                                <AnimateText text={'ĐĂNG KÝ NGAY'}/>
                            </Col>
                            <Col sm={12} md={6} lg={6} className="border-left-line">
                                <RegisterForm/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Row>
        </Container>
    );
};

export default Section01;
