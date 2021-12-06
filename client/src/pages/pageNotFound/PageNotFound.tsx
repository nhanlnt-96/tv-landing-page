import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header';

import './PageNotFound.scss';

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pnf-container">
      <div className="pnf-content">
        <p>Không tìm thấy trang</p>
        <button className="mt-3" onClick={() => navigate('/')}>
          Quay lại trang chủ
        </button>
      </div>
      <div className="pnf-footer">
        <Header />
      </div>
    </div>
  );
};

export default PageNotFound;
