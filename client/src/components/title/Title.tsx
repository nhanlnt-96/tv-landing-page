import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import './Title.scss';

interface IProps {
  title: string;
}

const Title: FC<IProps> = ({ title }) => {
  return (
    <Row className="title-container">
      <div className="title-content">
        <p>{title}</p>
      </div>
    </Row>
  );
};

export default Title;
