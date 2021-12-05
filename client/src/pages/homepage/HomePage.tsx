import React, { FC } from 'react';
import Section01 from 'section01/Section01';
import { Container } from 'react-bootstrap';
import './HomePage.scss';

const HomePage: FC = () => {
  return (
    <Container className="homepage-container" fluid>
      <Section01 />
    </Container>
  );
};

export default HomePage;
