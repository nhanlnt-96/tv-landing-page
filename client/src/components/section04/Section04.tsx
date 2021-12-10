import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import { section04Content } from 'configs/section04Content';
import Chicken from 'imgs/chicken.png';
import { IProps } from 'model/props';
import './Section04.scss';

const Section04: FC<IProps> = ({ click }) => {
  return (
    <Row className="section-04">
      <div className="section04-container">
        <div className="section04-content">
          <div className="content-title">
            <h6>KHÓA HỌC TRÊN EDUPIA KID MANG LẠI ĐIỀU GÌ CHO CON?</h6>
          </div>
          <div className="content-items">
            {section04Content.map((val, index) => (
              <p key={index}>
                <StarIcon />
                {val.content}
              </p>
            ))}
          </div>
        </div>
        <div className="section04-img">
          <img src={Chicken} alt="tv-landing-page" />
        </div>
        <div className="section04-btn">
          <button onClick={click}>NHẬN TƯ VẤN</button>
        </div>
      </div>
    </Row>
  );
};

export default Section04;
