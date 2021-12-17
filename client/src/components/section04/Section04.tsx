import React, { FC, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { section04Content } from 'configs/section04Content';
import { IProps } from 'model/props';
import Test1 from 'imgs/bg.jpg';

import './Section04.scss';

const Section04: FC<IProps> = ({ click }) => {
  const [imgSelect, setImgSelect] = useState<any>(Test1);
  const [isSelect, setIsSelect] = useState<number>(0);
  const onViewImgDivClick = (img: any, index: number) => {
    setIsSelect(index);
    setImgSelect(img);
  };
  return (
    <Row className="section-04">
      <div className="section04-container">
        <div className="section04-content">
          <Row className="content-title">
            <h6>
              KHÓA HỌC LÀM QUEN TIẾNG ANH MẦM NON TAN VAN E-LEARNING MANG LẠI
              ĐIỀU GÌ CHO CON?
            </h6>
          </Row>
          <Row className="content-items">
            <Col lg={7} md={6} xs={12} className="content">
              {section04Content.map((val, index) => (
                <div
                  className={`item ${
                    index === isSelect && 'content-item-active'
                  }`}
                  onClick={() => onViewImgDivClick(val.img, index)}
                >
                  <p>{val.title}</p>
                  <span>{val.content}</span>
                </div>
              ))}
            </Col>
            <Col lg={5} md={6} xs={12} className="img">
              <img src={imgSelect} alt="tan-van-e-learning" />
            </Col>
          </Row>
        </div>
        <div className="section04-btn">
          <button onClick={click}>NHẬN TƯ VẤN</button>
        </div>
      </div>
    </Row>
  );
};

export default Section04;
