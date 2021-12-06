import React, { FC } from 'react';
import Header from 'header/Header';

import './ThankPage.scss';

const ThankPage: FC = () => {
  return (
    <div className="thank-container">
      <div className="thank-header">
        <Header />
      </div>
      <div className="thank-content">
        <p>Cảm ơn quý phụ huynh đã để lại thông tin</p>
        <span>
          Chuyên viên tư vấn chương trình eLearning sẽ liên hệ với quý phụ
          huynh.
        </span>
      </div>
    </div>
  );
};

export default ThankPage;
