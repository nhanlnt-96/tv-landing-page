import React, { FC, useRef } from 'react';
import Section01 from 'section01/Section01';
import Section02 from 'section02/Section02';
import Section03 from 'section03/Section03';
import Section04 from 'section04/Section04';
import Section05 from 'section05/Section05';
import Section06 from 'section06/Section06';
import Section07 from 'section07/Section07';
import Section08 from 'section08/Section08';
import Section10 from 'section10/Section10';
import Section09 from 'section09/Section09';
import { Container } from 'react-bootstrap';
import './HomePage.scss';

const HomePage: FC = () => {
  const section02Ref = useRef<HTMLDivElement>(null);
  const section09Ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const onMoveToSection02BtnClick = () => {
    // @ts-ignore
    section02Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onMoveToSection09BtnClick = () => {
    // @ts-ignore
    section09Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container className="homepage-container" fluid>
      <Section01 click={onMoveToSection02BtnClick} />
      <div ref={section02Ref} className="space-top section02-bg">
        <Section02 click={onMoveToSection09BtnClick} />
      </div>
      <div className="space-top section03-bg">
        <Section03 click={onMoveToSection09BtnClick} />
      </div>
      <div className="space-top">
        <Section04 click={onMoveToSection09BtnClick} />
      </div>
      <div className="space-top section05-bg">
        <Section05 />
      </div>
      <div className="space-top">
        <Section06 click={onMoveToSection09BtnClick} />
      </div>
      <div className="space-top">
        <Section07 />
      </div>
      <div className="space-top">
        <Section08 />
      </div>
      <div ref={section09Ref} className="space-top">
        <Section09 />
      </div>
      <div className="space-top">
        <Section10 />
      </div>
    </Container>
  );
};

export default HomePage;
