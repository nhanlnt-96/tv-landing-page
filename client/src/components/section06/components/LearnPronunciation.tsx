import { FC } from 'react';
import VideoPlayer from 'videoPlayer/VideoPlayer';

export const LearnPronunciation: FC = () => {
  return (
    <div className="lp-container">
      <div className="lp-title">
        <p>1. Học phát âm như trẻ bản ngữ</p>
      </div>
      <div className="lp-video">
        <VideoPlayer videoCode={'0pqkFrReDMo'} />
      </div>
    </div>
  );
};
