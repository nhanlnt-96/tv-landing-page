import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';
import Intro1 from 'imgs/intro1.png';
import { VIDEO_INTRO_1 } from 'configs/videoUrl';

export const LearnSkills: FC = () => {
  return (
    <div className="lwf-container">
      <div className="section06-child-title">
        <p>3. Tương tác cùng bài tập 4 kỹ năng</p>
      </div>
      <div className="lwf-content section06-child-content">
        <div className="lwf-description">
          <div className="description-container">
            <div className="description-title">
              <h6>Môi trường luyện tập không giới hạn</h6>
            </div>
            <p>
              Rèn luyện cả 4 kỹ năng: Nghe - Nói - Đọc - Viết thông qua các bài
              tập bổ trợ sau mỗi bài giảng. Trẻ không chỉ được học, được tương
              tác với tiếng Anh mà còn được luyện tập và thực hành mỗi ngày với
              các bài tập vô cùng sinh động. Tăng hứng thú và tính tự giác trong
              học tập của trẻ.
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
