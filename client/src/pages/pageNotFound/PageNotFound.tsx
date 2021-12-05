import React, { FC } from 'react';
import SectionHeader from 'section01/components/SectionHeader';
import { useNavigate } from 'react-router-dom';

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
        <SectionHeader />
      </div>
    </div>
  );
};

export default PageNotFound;
