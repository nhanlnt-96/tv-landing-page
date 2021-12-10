import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';
import Intro1 from 'imgs/intro1.png';
import { VIDEO_INTRO_1 } from 'configs/videoUrl';

export const LearnWithForeign: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>2. Học cùng giáo viên bản ngữ</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-video">
          <VideoPlayer videoUrl={VIDEO_INTRO_1} posterImg={Intro1} />
        </div>
        <div className="lwf-description">
          <div className="description-container">
            <div className="description-title">
              <h6>Học cùng giáo viên bản ngữ sẽ giúp con</h6>
            </div>
            <p>
              Thầy cô giáo sẽ trình bày, dẫn dắt các bạn học sinh hiểu được từ
              vựng/mẫu câu mới qua các câu chuyện có gắn ngữ cảnh sử dụng. Sau
              đó, giáo viên sẽ đưa ra các ví dụ và khuyến khích các bạn học sinh
              nói theo. Điều này giúp các em phát âm chuẩn ngay từ đầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
