import { FC } from 'react';
import { VIDEO_INTRO_2 } from 'configs/videoUrl';
import Intro1 from 'imgs/intro1.png';
import VideoPlayer from 'videoPlayer/VideoPlayer';

export const LearnSkills: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>Bước 2</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-description">
          <div className="description-container">
            <p>
              Con thao tác các bài tập dạng game và luyện tập các nội dung trong
              bài học. Kết quả của các bài tập con thực hiện được lưu trên hệ
              thống LMS và được giáo viên gửi đến quý phụ huynh.
            </p>
          </div>
        </div>
        <div className="lwf-video">
          <VideoPlayer videoUrl={VIDEO_INTRO_2} posterImg={Intro1} />
        </div>
      </div>
    </div>
  );
};
