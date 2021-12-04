import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import SectionHeader from 'section01/components/SectionHeader';
import SectionMainContent from 'section01/components/SectionMainContent';

import './Section01.scss';

const Section01: FC = () => {
  return (
    <Row className="section-01">
      <SectionHeader />
      <SectionMainContent />
    </Row>
  );
};

export default Section01;
