import { FC } from 'react';
import VideoPlayer from '../../videoPlayer/VideoPlayer';

const videoJsOptions = {
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=0pqkFrReDMo',
      type: 'video/youtube',
    },
  ],
};

export const LearnPronunciation: FC = () => {
  return (
    <div className="lp-container">
      <div className="lp-title">
        <p>1. Học phát âm như trẻ bản ngữ</p>
      </div>
      <div className="lp-video">
        <VideoPlayer options={videoJsOptions} />
      </div>
    </div>
  );
};
