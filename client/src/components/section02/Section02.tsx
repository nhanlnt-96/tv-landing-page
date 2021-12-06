import React, { FC, forwardRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Diagram } from 'section02/components';

import './Section02.scss';

const Section02: FC<any> = forwardRef((ref) => {
  return (
    <Container ref={ref} className="section-02">
      <Row className="section02-title">
        <p>NHỮNG LO LẮNG CỦA CHA MẸ KHI CHO TRẺ HỌC TIẾNG ANH SỚM</p>
      </Row>
      <Diagram />
    </Container>
  );
});

export default Section02;
