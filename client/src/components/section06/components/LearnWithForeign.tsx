import { FC } from 'react';
import Img1 from 'imgs/kidLearning.jpeg';

export const LearnWithForeign: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>Bước 1</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-video">
          <img src={Img1} alt=""/>
        </div>
        <div className="lwf-description">
          <div className="description-container">
            {/*<div className="description-title">*/}
            {/*  <h6>Học cùng giáo viên bản ngữ sẽ giúp con</h6>*/}
            {/*</div>*/}
            <p>
              Con sử dụng điện thoại, máy tính bảng, laptop, máy vi tính,… mở
              bài học video do Giáo viên Việt Nam và Giáo viên Nước ngoài giảng
              dạy với những tình huống và hội thoại. Con xem và nhận biết từ
              vựng và mẫu câu theo chủ đề
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
