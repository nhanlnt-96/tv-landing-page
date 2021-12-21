import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  // LearnPronunciation,
  LearnSkills,
  LearnWithForeign,
} from 'section06/components';
import { IProps } from 'model/props';

import './Section06.scss';
import Title from 'title/Title';

const Section06: FC<IProps> = ({ click }) => {
  return (
    <Container fluid className="section-06">
      <Container className="section06-container">
        <Title title={'CON SẼ HỌC NHƯ THẾ NÀO TRÊN TAN VAN E-LEARNING?'} />
        {/*<Row className="section06-pronunciation">*/}
        {/*  <LearnPronunciation />*/}
        {/*</Row>*/}
        <Row className="section06-foreign">
          <LearnWithForeign />
        </Row>
        <Row className="section06-foreign">
          <LearnSkills />
        </Row>
        <Row className="section06-btn">
          <button onClick={click}>ĐĂNG KÝ NGAY</button>
        </Row>
      </Container>
    </Container>
  );
};

export default Section06;
