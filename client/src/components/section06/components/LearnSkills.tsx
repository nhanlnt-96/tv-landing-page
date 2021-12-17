import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';
import Intro1 from 'imgs/intro1.png';
import { VIDEO_INTRO_1 } from 'configs/videoUrl';

export const LearnSkills: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>Bước 2</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-description">
          <div className="description-container">
            {/*<div className="description-title">*/}
            {/*  <h6>Môi trường luyện tập không giới hạn</h6>*/}
            {/*</div>*/}
            <p>
              Con thao tác các bài tập dạng game và luyện tập các nội dung trong
              bài học. Kết quả của các bài tập con thực hiện được lưu trên hệ
              thống LMS và được giáo viên gửi đến quý phụ huynh.
            </p>
          </div>
        </div>
        <div className="lwf-video">
          <VideoPlayer videoUrl={VIDEO_INTRO_1} posterImg={Intro1} />
        </div>
      </div>
    </div>
  );
};
