import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';
import { VIDEO_INTRO_1 } from 'configs/videoUrl';
import Intro1 from 'imgs/intro1.png';

export const LearnWithForeign: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>Bước 1</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-video">
          <VideoPlayer videoUrl={VIDEO_INTRO_1} posterImg={Intro1} />
        </div>
        <div className="lwf-description">
          <div className="description-container">
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
