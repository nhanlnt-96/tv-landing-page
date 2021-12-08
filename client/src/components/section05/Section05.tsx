import React, { FC, useLayoutEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import './Section05.scss';
import { ContentSection, ContentSectionMobile } from 'section05/components';

const useWindowSize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return currentWidth;
};

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
