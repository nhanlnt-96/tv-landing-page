import React, { FC } from 'react';
// import { Container } from 'react-bootstrap';
import Title from 'title/Title';
import { MessageBox } from 'section12/components';
import { section12Content } from 'configs/section12Content';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IProps } from 'model/props';

import './Section12.scss';

const Section12: FC<IProps> = ({ click }) => {
  return (
    <div className="section-12">
      <div className="section12-title">
        <p>CHƯƠNG TRÌNH ƯU ĐÃI</p>
        <p>DÀNH CHO BÉ HỌC TẠI 308 TRƯỜNG MẦM NON</p>
        <p>LIÊN KẾT VỚI TRUNG TÂM NGOẠI NGỮ TÂN VĂN</p>
      </div>
      {/*<Title*/}
      {/*  title={*/}
      {/*    'Chương trình ưu đãi dành riêng cho bé học tại 308 trường Mầm non liên kết với Trung Tâm Ngoại Ngữ Tân Văn'*/}
      {/*  }*/}
      {/*/>*/}
      <div className="section12-container">
        {section12Content.map((val, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <MessageBox
                title={val.title}
                price={val.price}
                avatar={val.avatar}
              />
            </div>
            <div className="item-content">
              {val.benefit.map((benefit, benefitKey) => (
                <p key={benefitKey}>
                  <CheckCircleOutlineIcon /> {benefit}
                </p>
              ))}
              {val.bonus && (
                <div className="item-bonus">
                  {val.bonus?.map((bonus, bonusKey) => (
                    <p key={bonusKey}>
                      <AddCircleOutlineIcon style={{ color: '#39B7A7' }} />{' '}
                      {bonus}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="section12-register-btn">
        <button onClick={click}>ĐĂNG KÝ NGAY</button>
      </div>
    </div>
  );
};

export default Section12;
