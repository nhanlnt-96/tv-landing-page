import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  // LearnPronunciation,
  LearnSkills,
  LearnWithForeign,
} from 'section06/components';
import { IProps } from 'model/props';
import Title from 'title/Title';

import './Section06.scss';

const Section06: FC<IProps> = ({ click }) => {
  return (
    <Container fluid className="section-06">
      <Container className="section06-container">
        {/*<Title*/}
        {/*  title={'CON SẼ HỌC NHƯ THẾ NÀO TRÊN TAN VAN E-LEARNING CENTER?'}*/}
        {/*/>*/}
        <Row className="section06-title">
          <h6>CON SẼ HỌC NHƯ THẾ NÀO TRÊN</h6>
          <h6>TAN VAN E-LEARNING CENTER?</h6>
        </Row>
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
