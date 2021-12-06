import React, { FC, useRef } from 'react';
import Section01 from 'section01/Section01';
import Section02 from 'section02/Section02';
import { Container } from 'react-bootstrap';
import './HomePage.scss';

const HomePage: FC = () => {
  const moreDetailRef = useRef();
  const onMoreDetailBtnClick = () => {
    // @ts-ignore
    moreDetailRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container className="homepage-container" fluid>
      <Section01 btnClick={onMoreDetailBtnClick} />
      <Section02 ref={moreDetailRef} />
    </Container>
  );
};

export default HomePage;
