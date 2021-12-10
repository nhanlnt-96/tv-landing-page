import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import './Section06.scss';
import { LearnPronunciation } from 'section06/components';
import { LearnWithForeign } from 'section06/components/LearnWithForeign';

const Section06: FC = () => {
  return (
    <Container fluid className="section-06">
      <Container className="section06-container">
        <Row className="section06-title">
          <h6>CON SẼ HỌC NHƯ THẾ NÀO TRÊN EDUPIA KID?</h6>
          <p>
            Phá bỏ định kiến học ngoại ngữ: Học tiếng Anh sớm là quá khó, con
            mình không thể học được? Con mình không thể giỏi? Hay bố mẹ không
            thông thạo ngoại ngữ làm sao giúp con giỏi tiếng Anh? Hãy biến việc
            học của con cũng giống như việc "dắt ốc sên đi dạo" mẹ cần thời gian
            và một phương pháp phù hợp để có thể làm chủ tiếng Anh!
          </p>
        </Row>
        <Row className="section06-pronunciation">
          <LearnPronunciation />
        </Row>
        <Row className="section06-foreign">
          <LearnWithForeign />
        </Row>
      </Container>
    </Container>
  );
};

export default Section06;
