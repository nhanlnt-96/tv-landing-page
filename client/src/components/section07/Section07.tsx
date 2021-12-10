import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import './Section07.scss';
import { section07Content } from 'configs/section07Content';
import VideoPlayer from 'videoPlayer/VideoPlayer';

const Section07: FC = () => {
  return (
    <Container className="section-07">
      <Row className="section07-title">
        <p>PHỤ HUYNH NÓI GÌ VỀ EDUPIA KID</p>
        <span>
          MC Hoàng Linh, Nhà báo Chánh Văn và hàng nghìn ba mẹ thông thái đã tin
          tưởng lựa chọn Edupia cho con, còn bạn thì sao?
        </span>
      </Row>
      <Row className="section07-content">
        {section07Content.map((val, index) => (
          <div key={index} className="content-item">
            <div className="content-video">
              <VideoPlayer videoUrl={val.videoUrl} posterImg={val.posterImg} />
            </div>
            <div className="content-description">
              <h6>{val.title}</h6>
              <p>{val.description}</p>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Section07;
