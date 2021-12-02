import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Section01 from 'components/section01/Section01';

const MainLayout: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Section01 />
      </Row>
    </Container>
  );
};

export default MainLayout;
