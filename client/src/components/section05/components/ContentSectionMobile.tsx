import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { section05Content } from 'configs/section05Content';

export const ContentSectionMobile: FC = () => {
  return (
    <>
      {section05Content.map((val, index) => (
        <Row key={index} className="section05-content-mobile">
          <div className="content-mobile-shape">
            <p>GIAI ĐOẠN {val.step}</p>
          </div>
          <div className="content-mobile-line" />
          <div className="content-mobile-main">
            <p>
              <StarBorderIcon />
              {val.title}
            </p>
            <div className="sub-main">
              <span>{val.content}</span>
            </div>
          </div>
        </Row>
      ))}
    </>
  );
};
