import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContentSection, ContentSectionMobile } from 'section05/components';
import { useWindowSize } from 'helpers/useWindowSize';

import './Section05.scss';

const Section05: FC = () => {
  const currentWidth = useWindowSize();
  return (
    <Container className="section-05">
      <div className="section05-container">
        <Row className="section05-title">
          <h6>LỘ TRÌNH HỌC TOÀN DIỆN TỪ CƠ BẢN ĐẾN NÂNG CAO </h6>
        </Row>
        {currentWidth > 480 ? <ContentSection /> : <ContentSectionMobile />}
      </div>
    </Container>
  );
};

export default Section05;
