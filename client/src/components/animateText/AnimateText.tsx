import React, { FC } from 'react';
import './AnimateText.scss';

type Props = {
  text: string;
};

const AnimateText: FC<Props> = ({ text }) => {
  return (
    <>
      <h1 className="animate-text">
        {text.split('').map((val, index) => (
          <span className="sub-animate-text" key={index}>
            {val}
          </span>
        ))}
      </h1>
    </>
  );
};

export default AnimateText;
