import React, { FC, useRef } from 'react';
import Section01 from 'section01/Section01';
import Section02 from 'section02/Section02';
import Section03 from 'section03/Section03';
import Section04 from 'section04/Section04';
import Section05 from 'section05/Section05';
import Section06 from 'section06/Section06';
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
      <div ref={section02Ref} className="section02-ref space-top">
        <Section02 />
      </div>
      <div className="space-top">
        <Section03 />
      </div>
      <div className="space-top">
        <Section04 />
      </div>
      <div className="space-top">
        <Section05 />
      </div>
      <div className="space-top">
        <Section06 />
      </div>
    </Container>
  );
};

export default HomePage;
