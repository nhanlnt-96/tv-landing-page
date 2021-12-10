import React from 'react';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

import 'node_modules/video-react/dist/video-react.css';

const VideoPlayer = ({ videoUrl, posterImg }) => {
  return (
    <Player
      playsInline
      poster={posterImg}
      src={videoUrl}
      width="100%"
      height="100%"
    >
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  );
};

export default VideoPlayer;
