import React, { FC, useRef } from 'react';
import Section01 from 'section01/Section01';
import Section02 from 'section02/Section02';
import Section03 from 'section03/Section03';
import { Container } from 'react-bootstrap';
import './HomePage.scss';

const HomePage: FC = () => {
  const section02Ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const onMoveToSection02BtnClick = () => {
    // @ts-ignore
    section02Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container className="homepage-container" fluid>
      <Section01 click={onMoveToSection02BtnClick} />
      <div ref={section02Ref} className="section02-ref">
        <Section02 />
      </div>
      <Section03 />
    </Container>
  );
};

export default HomePage;
