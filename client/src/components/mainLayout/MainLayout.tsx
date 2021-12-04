import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import Section01 from 'section01/Section01';
import './MainLayout.scss';

const MainLayout: FC = () => {
  return (
    <Container className="main-layout" fluid>
      <Section01 />
    </Container>
  );
};

export default MainLayout;
