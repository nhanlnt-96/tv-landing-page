import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';
import Intro1 from 'imgs/intro1.png';
import { VIDEO_INTRO_1 } from 'configs/videoUrl';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const LearnPronunciation: FC = () => {
  return (
    <div className="lp-container">
      <div className="section06-child-title">
        <p>1. Học phát âm như trẻ bản ngữ</p>
      </div>
      <div className="lp-video">
        <VideoPlayer videoUrl={VIDEO_INTRO_1} posterImg={Intro1} />
      </div>
      <div className="lp-content">
        <div className="content-item">
          <p>
            Trẻ nghe các đoạn hội thoại tiếng Anh từ giọng đọc người bản ngữ.
          </p>
        </div>
        <div className="content-item">
          <KeyboardDoubleArrowRightIcon />
        </div>
        <div className="content-item">
          <p>Đọc và thu âm phát âm từ và câu </p>
        </div>
        <div className="content-item">
          <KeyboardDoubleArrowRightIcon />
        </div>
        <div className="content-item">
          <p>Hệ thống đánh giá, chấm điểm phát âm, chỉ ra các lỗi sai.</p>
        </div>
        <div className="content-item">
          <KeyboardDoubleArrowRightIcon />
        </div>
        <div className="content-item">
          <p>Nghe lại bài luyện nói và các lỗi sai trong bài nói</p>
        </div>
      </div>
    </div>
  );
};
