import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import Title from 'title/Title';

import './Section12.scss';

const Section12: FC = () => {
  return (
    <Container className="section-12">
      <Title
        title={
          'Chương trình ưu đãi dành riêng cho bé học tại 308 trường Mầm non liên kết với Trung Tâm Ngoại Ngữ Tân Văn'
        }
      />
    </Container>
  );
};

export default Section12;
